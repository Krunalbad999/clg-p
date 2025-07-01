"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProfileSetup() {
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState("")
  const router = useRouter()

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()])
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile setup submission
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
          <p className="mt-2 text-gray-600">Help us understand you better by completing your student profile</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Basic information about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number *</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
            </CardContent>
          </Card>

          {/* Professional Links */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Links</CardTitle>
              <CardDescription>Add your professional profiles and portfolios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input id="github" placeholder="https://github.com/yourusername" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hackerrank">HackerRank Profile</Label>
                  <Input id="hackerrank" placeholder="https://hackerrank.com/yourusername" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leetcode">LeetCode Profile</Label>
                  <Input id="leetcode" placeholder="https://leetcode.com/yourusername" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="codechef">CodeChef Profile</Label>
                  <Input id="codechef" placeholder="https://codechef.com/users/yourusername" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="codeforces">Codeforces Profile</Label>
                  <Input id="codeforces" placeholder="https://codeforces.com/profile/yourusername" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio Website</Label>
                  <Input id="portfolio" placeholder="https://yourportfolio.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="behance">Behance Profile</Label>
                  <Input id="behance" placeholder="https://behance.net/yourusername" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dribbble">Dribbble Profile</Label>
                  <Input id="dribbble" placeholder="https://dribbble.com/yourusername" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stackoverflow">Stack Overflow Profile</Label>
                  <Input id="stackoverflow" placeholder="https://stackoverflow.com/users/yourid" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="medium">Medium Profile</Label>
                  <Input id="medium" placeholder="https://medium.com/@yourusername" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="devto">Dev.to Profile</Label>
                  <Input id="devto" placeholder="https://dev.to/yourusername" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Information */}
          <Card>
            <CardHeader>
              <CardTitle>Education Information</CardTitle>
              <CardDescription>Details about your academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="university">University *</Label>
                <Input id="university" placeholder="Enter your university name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="college">College/Institute *</Label>
                <Input id="college" placeholder="Enter your college name" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="degree">Degree Type *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select degree type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="certificate">Certificate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course/Major *</Label>
                  <Input id="course" placeholder="e.g., Computer Science" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="admissionYear">Admission Year *</Label>
                  <Input id="admissionYear" type="number" placeholder="2020" min="2000" max="2030" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passoutYear">Expected Graduation Year *</Label>
                  <Input id="passoutYear" type="number" placeholder="2024" min="2020" max="2035" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cgpa">Current CGPA/Percentage *</Label>
                  <Input id="cgpa" placeholder="8.5 or 85%" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rollNumber">University Roll Number *</Label>
                  <Input id="rollNumber" placeholder="Enter your roll number" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills and Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Interests</CardTitle>
              <CardDescription>Add your technical skills and areas of interest</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skills">Technical Skills</Label>
                <div className="flex gap-2">
                  <Input
                    id="skills"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    placeholder="e.g., JavaScript, Python, React"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Job Preferences</CardTitle>
              <CardDescription>Tell us about your career aspirations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="jobRole">Preferred Job Role *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred job role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="mobile">Mobile Developer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="ml-engineer">ML Engineer</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="designer">UI/UX Designer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Professional Summary</Label>
                <Textarea
                  id="description"
                  placeholder="Write a brief description about yourself, your goals, and what you're looking for in your career..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
            <Button type="submit">Complete Profile</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
