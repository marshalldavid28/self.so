import { z } from "zod";

const HeaderSection = z.object({
  name: z.string(),
  shortAbout: z.string().describe("Short description of your profile"),
  location: z
    .string()
    .describe("Location with format 'City, Country, Timezone'"),
  contacts: z.object({
    website: z.string().describe("Personal website or portfolio URL"),
    email: z.string().describe("Email address"),
    phone: z.string().describe("Phone number"),
    twitter: z.string().describe("Twitter/X username"),
    linkedin: z.string().describe("LinkedIn username"),
    github: z.string().describe("GitHub username"),
  }),
});

const SummarySection = z.string().describe("Summary of your profile");

const WorkExperienceSection = z.array(
  z.object({
    company: z.string().describe("Company name"),
    link: z.string().describe("Company website URL"),
    skills: z.array(z.string()).describe("Skills used within the role"),
    title: z.string().describe("Job title"),
    start: z.string().describe("Start date in format 'YYYY-MM-DD'"),
    end: z.string().describe("End date in format 'YYYY-MM-DD'"),
    description: z.string().describe("Job description"),
  })
);

export const ResumeDataSchema = z.object({
  header: HeaderSection,
  summary: SummarySection,
  workExperience: WorkExperienceSection,
});
