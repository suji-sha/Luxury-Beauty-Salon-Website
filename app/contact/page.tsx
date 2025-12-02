import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRightIcon,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "./_components/DatePicker";
import { Input } from "@/components/ui/input";
import { FieldSet, Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
export default function contactpage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/image/23.jpg"
          alt="Luxury Beauty Salon"
          className="absolute inset-0 w-full h-full object-cover "
        />
      </section>

      {/* second section   */}
      <section className="py-16 px-6 bg-brand-bg">
        <div className=" container grid grid-cols-[40%_60%] gap-6 items-start m-10">
          {/* left side section  */}
          <Card className="bg-brand-secondary h-full pt-0 pb-0 overflow-hidden">
            <CardHeader className="bg-brand-secondary text-brand-text p-2 gap-0 rounded-t-lg">
              <div className=" items-center">
                <CardTitle className="text-3xl text-center">
                  Quick Contact
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="pb-3 text-brand-text">
                Experience the best salon services in your services
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-brand-text">
                  <Phone className="size-4 text-brand-cta" />
                  <span className="text-sm">9876543212</span>
                </li>
                <li className="flex items-center gap-2 text-brand-text">
                  <Mail className="size-4 text-brand-cta" />
                  <span className="text-sm">beauty@gmail.com</span>
                </li>
                <li className="flex items-center gap-2 text-brand-text">
                  <MapPin className="size-4 text-brand-cta" />
                  <span className="text-sm">Bhaktapur</span>
                </li>
                <li className="flex items-start gap-2 text-brand-text">
                  <Clock className="size-4 text-brand-cta" />
                  <span className="text-sm">Mon-Sat :</span>
                  <div className="flex flex-col">
                    <span> 10am to 8pm </span>
                    <span className="text-sm text-brand-cta">
                      Sunday Closed
                    </span>
                  </div>
                </li>
              </ul>

              {/* Avatar */}
              <div className="border border-brand m-4 "></div>
              <div className="p-2">
                <li className="flex items-center gap-4 text-brand-text">
                  {/* Facebook */}
                  <Avatar className="bg-white shadow-md border">
                    <AvatarFallback className="bg-white">
                      <Facebook className="size-5 text-blue-500" />
                    </AvatarFallback>
                  </Avatar>

                  {/* Instagram Gradient */}
                  <Avatar className="bg-white shadow-md border">
                    <AvatarFallback className="bg-gradient-to-r from-purple-700 to-pink-500 text-white flex items-center justify-center">
                      <Instagram className="size-5 text-white" />
                    </AvatarFallback>
                  </Avatar>

                  {/* Twitter */}
                  <Avatar className="bg-white shadow-md border">
                    <AvatarFallback className="bg-white">
                      <Twitter className="size-5 text-blue-500" />
                    </AvatarFallback>
                  </Avatar>

                  {/* Youtube */}
                  <Avatar className="bg-white shadow-md border">
                    <AvatarFallback className="bg-white">
                      <Youtube className="size-5 text-red-500" />
                    </AvatarFallback>
                  </Avatar>
                </li>
              </div>
            </CardContent>
          </Card>

          {/* right side section*/}

          <Card className="bg-brand-secondary h-full w-full pt-0 pb-2  overflow-hidden">
            <CardHeader className="bg-brand-secondary text-brand-text gap-0 rounded-t-lg">
              <div className="items-center ">
                <CardTitle className="text-3xl p-2 text-center ">
                  Book Your Appointment
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className=" container grid grid-cols-2 gap-4 items-start ">
                {/*left side select */}
                <Select>
                  <SelectTrigger className="w-full bg-brand-bg">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="makeup">Make Up</SelectItem>
                      <SelectItem value="skincare">Skin Care</SelectItem>
                      <SelectItem value="hair">Hair</SelectItem>
                      <SelectItem value="nails">Nails</SelectItem>
                      <SelectItem value="waxing and hair removal">
                        Waxing and Hair Removal
                      </SelectItem>
                      <SelectItem value="eye and lash">Eye and Lash</SelectItem>
                      <SelectItem value="spa and massage">
                        Spa and Massage
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* right side select */}
                <Select>
                  <SelectTrigger className="w-full bg-brand-bg">
                    <SelectValue placeholder="Have you visited US before" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Have You Visited US Before *</SelectLabel>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* Input for Name */}
                <div className="bg-brand-bg rounded-lg ">
                  <Input type="Name" placeholder="Enter Name *" />
                </div>
                {/* appointment */}
                <DatePicker />
                {/* Input for Email */}
                <div className="bg-brand-bg rounded-lg">
                  <Input type="Email" placeholder="Enter Email *" />
                </div>
                {/* Input for Address */}
                <div className="bg-brand-bg rounded-lg">
                  <Input type="Address" placeholder="Enter Address *" />
                </div>
                <div className="col-span-2">
                  {/* field for text for comment */}
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add your Messages"
                    className="resize-none bg-brand-bg"
                  />
                </div>
                {/* button */}

                <Button className=" w-30 transition-all duration-300 hover:opacity-90 bg-brand-cta">
                  Click to Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
