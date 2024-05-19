/* eslint-disable react/prop-types */
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@radix-ui/react-avatar";
import {DotsVerticalIcon, PersonIcon} from "@radix-ui/react-icons";
import { useEffect, useState } from "react"; // Import useState for managing local component state
import { UpdateIssueForm } from './UpdateIssueDetails.jsx'; // Import the UpdateIssueForm component

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";

import UserList from "./UserList";
import {useDispatch} from "react-redux";
import {deleteIssue, fetchIssueById, updateIssue, updateIssueStatus} from "@/redux/Issue/Issue.action";
import {useNavigate, useParams} from "react-router-dom";

import {fetchComments} from "@/redux/Comment/comment.action.js";
import {DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog.jsx";
import {CreateIssueForm} from "@/pages/Issue/CreateIssueForm.jsx";
import {Dialog, DialogClose, DialogOverlay} from "@radix-ui/react-dialog";

const IssueCard = ({item}) => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false); // State to manage the visibility of the edit form

    //const { id } = item; // Destructure item.id directly


    const handleDelete = () => {
        dispatch(deleteIssue(item.id))
    }
    const handleEdit = () => {
        setIsEditing(true); // Set the isEditing state to true to display the edit form
    };

    const handleCloseEdit = () => {
        setIsEditing(false); // Set the isEditing state to false to hide the edit form
    };
    return (
        <Card className="rounded-md py-1 pb-2">
            <CardHeader className="py-0 pb-1">
                <div className="flex justify-between items-center">
                    <CardTitle className="cursor-pointer hover:text-gray-300"
                               onClick={() => navigate(`/project/${id}/issue/${item.id}`)}>{item.title}</CardTitle>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            {" "}
                            <Button
                                className="rounded-full focus:outline-none"
                                variant="ghost"
                                size="icon"
                            >
                                <DotsVerticalIcon/>{" "}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={handleEdit}>
                                Edit</DropdownMenuItem> {/* Attach handleEdit to the Edit menu item */}
                            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="py-0">
                <div className="flex items-center justify-between">
                    <p>{() => navigate(`/project/${id}/issue/${item.id}`)}{item.description}</p>

                    <DropdownMenu className="w-[30rem] border border-red-400">
                        <DropdownMenuTrigger>
                            <Button
                                className="bg-gray-900 hover:text-black text-white rounded-full"
                                size="icon"
                            >
                                <Avatar>
                                    <AvatarFallback>{
                                        item.assignee?.fullName[0].toUpperCase() ||
                                        <PersonIcon/>
                                    }</AvatarFallback>
                                </Avatar>

                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <UserList issueDetails={item}/>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </CardContent>
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogOverlay />
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Issue</DialogTitle>
                    </DialogHeader>
                    <UpdateIssueForm issueId={item.id} onClose={handleCloseEdit} />
                    <DialogClose asChild>
                        <Button onClick={handleCloseEdit}>Close</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default IssueCard;
