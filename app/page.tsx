import Image from "next/image"
import { ArrowRight, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/placeholder.svg?height=24&width=24" alt="Logo" width={24} height={24} />
              <span className="hidden font-bold sm:inline-block">Acme Inc.</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#services">
                Services
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
                Contact
              </a>
            </nav>
          </div>
          <Button className="ml-auto" size="sm">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Acme Inc.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We provide innovative solutions for your business needs. Let's grow together.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-8">
              {["Consulting", "Development", "Marketing"].map((service) => (
                <div key={service} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-black bg-opacity-50 rounded-full">
                    <ArrowRight className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service}</h3>
                  <p className="text-zinc-200 dark:text-zinc-100 text-center">
                    We offer top-notch {service.toLowerCase()} services tailored to your needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="space-y-4 md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Acme Inc. has been at the forefront of innovation for over a decade. We're committed to delivering
                  excellence in every project we undertake.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="About Acme Inc."
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Us</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-gray-500" />
                  <span>info@acmeinc.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2025 Acme Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

