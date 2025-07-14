import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Avatar, AvatarImage } from "../avatar";
import { Button } from "../button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
      <div>
        <h1 className="text-2xl font-bold">
          Job <span className="text-[#F83002]"> Portal </span>
        </h1>
      </div>
      <div className="flex item-center gap-12">
        <ul className="flex font-medium items-center gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        <Popover>
          <PopoverTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="">
              <div className="flex gap-2 space-y-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div className="">
                  <h4 className="font-medium">Pardeep yadav</h4>
                  <p className="text-sm text-muted-forground">Lorem Ipsum</p>
                </div>
              </div>
              <div className="flex flex-col my-2 text-gray-600">
                <div className="flex w-fit items-cente gap-2 cursor-pointer">
                  <User2 />
                  <Button variant="link">view profile</Button>
                </div>
                <div className="flex w-fit items-cente gap-2 cursor-pointer">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
export default Navbar;
