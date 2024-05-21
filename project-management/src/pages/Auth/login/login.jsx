import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useDispatch} from "react-redux";
import {login} from "@/redux/Auth/Action";
import {useNavigate} from "react-router-dom";

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const LoginForm = ({switchToPasswordResetForm}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {

        dispatch(login(data))
            .then(() => {
            navigate("/")
            console.log("login form", data);
        }).catch((error) => {
            console.error("failed to login", error);
            alert("Failed to login: " + error.message);
        })

    };

    return (
        <div className="space-y-5">
            <h1 className="text-center font-xl font-bold text-black underline decoration-1">Login</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="border w-full py-5 px-5 font-bold text-black"
                                        placeholder="Enter your email"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        className="border font-bold text-black w-full border-gray-700 py-5 px-5"
                                        placeholder="Enter your password"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-slate-400 py-5">
                        Login
                    </Button>
                    <div className="flex items-center font-bold text-black justify-center">
                        <Button variant="ghost" type="button" onClick={switchToPasswordResetForm}>
                            Forget Password
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
