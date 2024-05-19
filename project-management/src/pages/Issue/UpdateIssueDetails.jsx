import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssueById, updateIssue } from "@/redux/Issue/Issue.action";
import { useEffect, useState } from "react";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Issue name must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
});

export function UpdateIssueForm({ onClose, issueId }) {
    const dispatch = useDispatch();
    const { issue } = useSelector((store) => store.issue);
    const [isLoading, setIsLoading] = useState(true);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    // Fetch data on component mount and whenever issueId changes
    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching issue with ID:", issueId);
            await dispatch(fetchIssueById(issueId));
            setIsLoading(false);
        };

        fetchData();
    }, [dispatch, issueId]);

    // Set form values only after data is fetched successfully
    useEffect(() => {
        if (issue && issue.id === issueId) {
            form.setValue("title", issue.title || "");
            form.setValue("description", issue.description || "");
            console.log("Form values set:", { title: issue.title, description: issue.description });
        }
    }, [issue, issueId, form]); // Consider removing form from dependency if it doesn't change

    const onSubmit = (data) => {
        console.log("Submitting data:", data);
        dispatch(updateIssue(issueId, data)); // Pass id and data separately
        onClose(); // Close the form after submission
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} style={{ height: "8rem" }} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end space-x-2">
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type="submit">Update Issue</Button>
                </div>
            </form>
        </Form>
    );
}
