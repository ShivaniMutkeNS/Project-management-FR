import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {reset, updatePassword} from '@/redux/Auth/Action';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@/components/ui/form";


const formSchema = z.object({
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().refine((data) => data.confirmPassword === data.password, {
        message: 'Passwords do not match',
    }),
});

const UpdatePasswordForm = () => {
    const dispatch = useDispatch();
    const location = useLocation(); // Access useLocation
    const [token, setToken] = useState('');
    const [backToLogin, setBackToLogin] = useState(false); // Track API call status
    const navigate = useNavigate();

    // Extracting token from URL parameters
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tokenParam = searchParams.get('token');
        if (tokenParam) {
            setToken(tokenParam);
        }
    }, [location.search]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data) => {
        dispatch(updatePassword({ password: data.password, token }))
            .then(() => {
                setBackToLogin(true);
            })
            .catch((error) => {
                console.error("Failed to reset password", error);
                // Display an alert or handle the error appropriately here
                alert("Failed to reset password: " + error.message);
            });
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="loginContainer">
            <div className="box h-[30rem] w-[25rem]">
                <div className="minContainer login">
                    <div className="loginBox w-full px-10 space-y-5 font-xl font-bold text-black-900">

                        <div className="flex items-center justify-center font-xl font-bold text-black">
                            <div className="space-y-5">
                                <h1 className="text-center font-xl font-bold text-black underline decoration-1">Reset
                                    Password</h1>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="password"
                                                            className="border w-full py-5 px-5 font-bold text-black"
                                                            placeholder="New password"
                                                            disabled={backToLogin}
                                                        />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="confirmPassword"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="password"
                                                            className="border w-full py-5 px-5 font-bold text-black"
                                                            placeholder="Confirm password"
                                                            disabled={backToLogin}
                                                        />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <div className="space-x-5">
                                            <Button
                                                type="submit"
                                                className="w-full bg-black bg-opacity-70 text-white py-3"
                                                disabled={backToLogin} // Disable button while backToLogin
                                            >
                                                Reset Password
                                            </Button>
                                        </div>
                                        <div className="space-x-5">
                                            <Button
                                                className="w-full bg-black bg-opacity-70 text-white py-3"
                                                onClick={handleLoginRedirect}
                                            >
                                                Now you can login
                                            </Button>
                                        </div>

                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePasswordForm;
