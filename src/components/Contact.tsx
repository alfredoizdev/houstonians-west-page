"use client";

import { useState, type FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#F5F5F5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Contact Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#1A1A1A]/70">
          Have questions? Reach out and we&apos;ll get back to you as soon as
          possible.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C41E3A]/10">
                <Mail className="h-5 w-5 text-[#C41E3A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A]">Email</h3>
                <p className="text-sm text-[#1A1A1A]/70">info@houstonianswest.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C41E3A]/10">
                <Phone className="h-5 w-5 text-[#C41E3A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A]">Phone</h3>
                <p className="text-sm text-[#1A1A1A]/70">(713) 555-0199</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C41E3A]/10">
                <MapPin className="h-5 w-5 text-[#C41E3A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A]">Location</h3>
                <p className="text-sm text-[#1A1A1A]/70">
                  West Houston Sports Complex
                  <br />
                  Houston, TX 77077
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          {submitted ? (
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">
                    Message Sent!
                  </h3>
                  <p className="mt-1 text-sm text-[#1A1A1A]/70">
                    We&apos;ll get back to you shortly.
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#C41E3A] font-bold text-white hover:bg-[#8B0000]"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
