
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { assignedUserToIssue } from "@/redux/Issue/Issue.action";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Skeleton } from "@/components/ui/skeleton";

const UserList = ({ issueDetails }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project, auth, issue } = useSelector((store) => store);

  const handleIssueAssigne = (userId) => {
    dispatch(assignedUserToIssue(
      { 
        userId,
      issueId: issueDetails.id 
    }));
  };

  return (
    <Fragment>
      {!issue.loading?
      <div className="space-y-2">
      <div className="border rounded-md">
        <p className="py-2 px-3">{issueDetails.assignee?.fullName || "Unassigne"}</p>
      </div>
      {project.projectDetails?.teamMembers.map((item) => (
        <div
          onClick={()=>handleIssueAssigne(item.user.id)}
          key={item.user.id}
          className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
        >
          <Avatar className="">
            <Avatar key={item.user} className={`cursor-pointer`}>
              {/* Access user properties through item.user */}
              <AvatarFallback>{item.user.fullName[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
          </Avatar>

          <div className=" space-y-1">
            <p className="text-sm font-medium leading-none">{item.user.fullName}</p>
            <p className="text-xs text-muted-foreground">
              @{item.user.fullName?.toLowerCase().split(" ").join("_")}
            </p>
          </div>
        </div>
      ))}
    </div>:<div>
    <div className="p-1">
      <Skeleton className="border rounded-md h-[2rem]">
      </Skeleton>
      {project.projectDetails?.teamMembers.map((item) => (
        <Skeleton
          key={item}
          className="w-full h-[2rem]"
        >
          <Skeleton className="">
            
          </Skeleton>

          <Skeleton className=" space-y-1">
            <Skeleton className="text-sm font-medium leading-none"></Skeleton>
            <Skeleton className="text-xs text-muted-foreground">
             
            </Skeleton>
          </Skeleton>
        </Skeleton>
      ))}
    </div>
      </div>}
    </Fragment>
  );
};

export default UserList;
