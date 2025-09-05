"use client"

import { Button } from "@/components/ui/button"
import { FAQItem } from "@/components/faq-item"
import Image from "next/image"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function WebsiterLanding() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  const handleSignInClick = () => {
    router.push('/login')
  }

  const handleSignUpClick = () => {
    router.push('/signup')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center min-h-screen">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[80vh]">
              {/* Left side - Content */}
              <div className="space-y-8 p-12 lg:p-16 leading-4">
                {/* Navigation */}
                <nav className="flex items-center justify-between mb-12 text-left">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold font-sans text-2xl text-pink-600">websiter.click</span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-50 font-medium px-6 py-2 rounded-full bg-transparent"
                    onClick={handleSignInClick}
                  >
                    Sign In →
                  </Button>
                </nav>

                <div className="space-y-8">
                  {/* Hero Content */}
                  <div className="space-y-4">
                    <h1 className="font-light text-gray-900 leading-tight tracking-wide text-6xl">Your Website,</h1>
                    <h2 className="text-4xl text-gray-900 leading-tight font-extrabold lg:text-6xl -mt-6 px-0 ml-0 mr-0">
                      Simplified
                    </h2>
                    <p className="leading-relaxed max-w-lg text-lg text-slate-800">
                      Order your professional website like you&apos;d order anything online – simple, transparent, and
                      entirely on your terms.
                    </p>
                  </div>

                  {/* Hero Stats Bar */}
                  <div className="grid grid-cols-2 gap-4 text-base">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-600">100% Self-service ordering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-600">$0 Hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-600">24/7 Dashboard access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-600">0 Meetings required</span>
                    </div>
                  </div>

                  {/* Updated CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-6 text-lg rounded-full"
                      onClick={handleSignUpClick}
                    >
                      Start Your Order
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-900 text-gray-900 hover:bg-gray-50 font-medium px-8 py-6 text-lg rounded-full bg-transparent"
                    >
                      Send Us a Message
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right side - Geometric Mosaic */}
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-8 lg:p-12 min-h-[80vh] flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 w-full max-w-md">
                  {/* Row 1 */}
                  <div className="aspect-square bg-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"></div>
                  </div>

                  {/* Row 2 */}
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
                  </div>
                  <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                  </div>

                  {/* Row 3 */}
                  <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                  </div>

                  {/* Row 4 */}
                  <div className="aspect-square bg-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Responsiveness Showcase Section */}
      <section id="mobile-showcase" className="py-24 bg-gray-50">
        <div className="px-8 py-0 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left side - Illustrated Mobile Frame */}
            <div className="flex justify-center lg:justify-start items-start flex-row px-[121px]">
              <div className="relative">
                <div className="bg-gray-900 rounded-[2rem] p-1 shadow-xl transform rotate-2">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden w-72 h-[580px] relative border-gray-200 border-[3px] opacity-100 shadow-md font-medium font-sans">
                    {/* Illustrated Status Bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-between px-4">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white text-xs font-mono">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm"></div>
                        <div className="w-2 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    <div className="p-4 h-full bg-white overflow-hidden">
                      {/* Navigation */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-bold text-base text-pink-600">websiter.click</span>
                        <div className="border-2 border-gray-900 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                          Sign In →
                        </div>
                      </div>

                      {/* Hero Content */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h1 className="font-light text-gray-900 text-xl leading-tight">Your Website,</h1>
                          <h2 className="text-lg text-gray-900 font-black">Simplified</h2>
                        </div>

                        <p className="text-xs text-slate-800 leading-relaxed">
                          Order your professional website like you&apos;d order anything online – simple, transparent, and
                          entirely on your terms.
                        </p>

                        {/* Stats with illustrated dots */}
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-600">100% Self-service ordering</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-600">$0 Hidden fees</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-600">24/7 Dashboard access</span>
                          </div>
                        </div>

                        {/* Illustrated CTAs */}
                        <div className="space-y-2 pt-4">
                          <div className="w-full bg-pink-500 text-white py-2 px-3 rounded-full text-xs font-medium text-center">
                            Start Your Order
                          </div>
                          <div className="w-full border-2 border-gray-900 text-gray-900 py-2 px-3 rounded-full text-xs font-medium text-center">
                            See How It Works ↓
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gray-900 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-sm opacity-70"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] text-balance">
                  <span className="block">Built for Mobile,</span>
                  <span className="block text-pink-600">Perfect</span>
                  <span className="block text-pink-600">Everywhere</span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg text-pretty">
                  We design for phones first — because that&apos;s where users are. Your site automatically looks flawless on
                  tablets, laptops, and desktops. No compromises. Just perfect fit, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-normal text-gray-900 mb-8 border-l-4 border-gray-300 pl-6">
                Why Choose Websiter?
              </h2>

              <div className="text-gray-900 leading-relaxed space-y-1">
                <span className="text-2xl font-bold">Responsive & Mobile-Optimized</span>
                <span className="text-xl font-normal">
                  → Your website automatically adapts to every screen size and device.{" "}
                </span>
                <span className="text-3xl font-bold">All-in-One Project Dashboard </span>
                <span className="text-xl font-normal">
                  →Your personal command center to track project progress, submit support tickets, communicate and view
                  timeline estimates{" "}
                </span>
                <span className="text-2xl font-bold">Crystal-Clear Pricing Architecture</span>
                <span className="text-xl font-normal">→ No surprises, no hidden fees </span>
                <span className="text-2xl font-bold">And Precision-Tailored for Your Vision</span>
                <span className="text-xl font-normal">
                  → Custom websites built specifically for your business needs, brand identity, and industry
                  requirements.
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <Image 
                src="/koala-illustration.png" 
                alt="Koala illustration" 
                width={1200} 
                height={800} 
                className="w-full max-w-3xl h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Dashboard Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] text-balance mb-8">
                <span className="block">Your Dashboard.</span>
                <span className="block text-pink-600">Your Control.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-pretty">
                From day one, you&apos;re in charge. Track progress, message our team, request changes, and approve every
                step — all from one simple, real-time dashboard. Transparent, intuitive, and always available. Your
                website, managed your way.
              </p>
            </div>

            {/* Dashboard Section - Full Width */}
            <div className="w-full px-8 lg:px-16">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-7xl mx-auto">
                {/* Dashboard Header */}
                <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                        <div className="w-5 h-5 bg-white rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">Project Dashboard</h3>
                        <p className="text-sm text-gray-600">Your Website Development Hub</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Navigation Tabs */}
                <div className="bg-white border-b border-gray-200">
                  <div className="px-8">
                    <nav className="flex space-x-8">
                      <button className="py-3 px-1 border-b-2 border-pink-600 text-pink-600 font-medium text-sm">
                        Overview
                      </button>
                      <button className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                        Projects
                      </button>
                      <button className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                        Payment
                      </button>
                      <button className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                        Support
                      </button>
                      <button className="py-3 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                        Settings
                      </button>
                    </nav>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Progress & Updates */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Project Progress */}
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-bold text-lg text-gray-900 mb-4">Website Progress</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">Design Approved</p>
                                <p className="text-xs text-gray-600">Completed 3 days ago</p>
                              </div>
                            </div>
                            <span className="text-green-600 font-medium text-xs">Complete</span>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">Content Integration</p>
                                <p className="text-xs text-gray-600">In progress - 75% complete</p>
                              </div>
                            </div>
                            <span className="text-blue-600 font-medium text-xs">Active</span>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-white rounded-lg opacity-60">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">Testing & Launch</p>
                                <p className="text-xs text-gray-600">Estimated completion: 2 days</p>
                              </div>
                            </div>
                            <span className="text-gray-400 font-medium text-xs">Pending</span>
                          </div>
                        </div>
                      </div>

                      {/* Recent Updates */}
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-3">Recent Updates</h4>
                        <div className="space-y-2">
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                            <p className="text-blue-800 font-medium text-sm">Homepage design is ready for review</p>
                            <p className="text-blue-600 text-xs mt-1">2 hours ago • Development Team</p>
                          </div>
                          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                            <p className="text-green-800 font-medium text-sm">
                              Logo integration completed successfully
                            </p>
                            <p className="text-green-600 text-xs mt-1">1 day ago • Design Team</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Actions & Stats */}
                    <div className="space-y-4">
                      {/* Quick Actions */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-bold text-lg text-gray-900 mb-3">Quick Actions</h4>
                        <div className="space-y-2">
                          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-3 rounded-lg font-medium text-sm transition-colors">
                            Create Support Ticket
                          </button>
                          <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-3 rounded-lg font-medium text-sm transition-colors">
                            Profile Information
                          </button>
                          <button className="w-full border-2 border-blue-300 hover:border-blue-400 text-blue-700 py-2 px-3 rounded-lg font-medium text-sm transition-colors">
                            Payment
                          </button>
                        </div>
                      </div>

                      {/* Project Stats */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-bold text-lg text-gray-900 mb-3">Project Stats</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">Progress</span>
                            <span className="font-bold text-gray-900">75%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-pink-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">Days Remaining</span>
                            <span className="font-bold text-gray-900">2</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">Revisions Used</span>
                            <span className="font-bold text-gray-900">1 of ∞</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">FAQ</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Your Questions, Answered</h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  question: "How does the ordering process actually work?",
                  answer:
                    "It works exactly like ordering anything online. Browse our website packages, add the features you want, customize your preferences, fill out your details, and checkout securely. The difference? Instead of receiving a package, you get a professional website and immediate access to your project dashboard.",
                },
                {
                  question: "What makes the dashboard so powerful?",
                  answer:
                    "Your dashboard is like having a project manager, communication tool, and progress tracker all in one. You can see real-time updates on your website development, ask questions and get answers, request unlimited revisions, view timeline estimates, approve each phase, download files, and maintain complete visibility into your project – 24/7.",
                },
                {
                  question: "Can I really request revisions through the dashboard?",
                  answer:
                    "Absolutely. Your dashboard includes a sophisticated revision system. Click \"Request Revision,\" describe what you'd like changed, attach reference images if needed, and submit. You'll get timeline updates and can track the revision progress just like your original order.",
                },
                {
                  question: "How do I know when my website will be ready?",
                  answer:
                    "Your dashboard shows estimated completion dates for each phase of your project. As work progresses, timelines automatically update based on actual progress. You'll always know exactly where things stand and when to expect the next milestone.",
                },
                {
                  question: "What happens after I place my order?",
                  answer:
                    "Immediately after checkout, you receive dashboard access credentials. Your project enters our development queue, and you can start tracking progress within hours. Your dashboard becomes your direct line to our team and your window into the development process.",
                },
                {
                  question: "What if I need changes after my website launches?",
                  answer:
                    "Your dashboard doesn't disappear after launch – it transforms into your ongoing website management portal. Submit maintenance requests, ask questions, request updates, and access support services all through the same familiar interface you used during development.",
                },
              ].map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Footer Content */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-between"
        style={{ backgroundImage: "url(/action-background.png)" }}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-black mb-8 leading-7 text-4xl font-medium">Ready to Place Your Website Order?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-medium px-12 py-6 text-xl rounded-full"
                onClick={handleSignUpClick}
              >
                start your order
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black hover:bg-black hover:text-white px-12 py-6 text-xl rounded-full bg-transparent font-normal border-slate-900 border"
              >
                need more ...
              </Button>
            </div>
          </div>
        </div>

        <div className="py-12 text-center">
          <p className="text-black text-sm mb-6">© 2025 Websiter.click. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-black hover:text-gray-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}