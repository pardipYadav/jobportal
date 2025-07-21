import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { X } from "lucide-react";
const UpdateProfileDialoge = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <DialogClose asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </DialogClose>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name__" className="col-span-3" />
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default UpdateProfileDialoge;
