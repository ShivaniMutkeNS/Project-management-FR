import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {reset} from "@/redux/Auth/Action.js";
import {useDispatch} from "react-redux";

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
});

const PasswordResetTokenForm = ({ switchToLoginForm }) => {
    const dispatch = useDispatch();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data) => {
        dispatch(reset(data));
    };

    return (
        <div className="space-y-5">
            <h1 className="text-center font-xl font-bold text-black underline decoration-1">Reset Password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="border w-full py-5 px-5 font-bold text-black"
                                        placeholder="Enter your email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-slate-400 py-5">
                        Send Reset Link
                    </Button>
                    <div className="flex items-center font-bold text-black justify-center">
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default PasswordResetTokenForm;
