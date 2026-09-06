export type TeamMember = {
  id: string;
  name: string;
  role: string;
  /** Public path under /team — extension optional; any common image format works */
  image: string;
  /** Optional external or detail link for “learn more” */
  href?: string;
};

/** Twelve profile slots for the Team page. Update names/roles and drop photos in public/team/. */
export const teamMembers: TeamMember[] = [
  {
    id: 'member-01',
    name: 'Team Member 01',
    role: 'Lead Developer',
    image: '/team/member-01',
  },
  {
    id: 'member-02',
    name: 'Team Member 02',
    role: 'Frontend Engineer',
    image: '/team/member-02',
  },
  {
    id: 'member-03',
    name: 'Team Member 03',
    role: 'Frontend Engineer',
    image: '/team/member-03',
  },
  {
    id: 'member-04',
    name: 'Team Member 04',
    role: 'UI / Brand Designer',
    image: '/team/member-04',
  },
  {
    id: 'member-05',
    name: 'Team Member 05',
    role: 'Creative Lead',
    image: '/team/member-05',
  },
  {
    id: 'member-06',
    name: 'Team Member 06',
    role: 'Convenor',
    image: '/team/member-06',
  },
  {
    id: 'member-07',
    name: 'Team Member 07',
    role: 'Event Lead',
    image: '/team/member-07',
  },
  {
    id: 'member-08',
    name: 'Team Member 08',
    role: 'Operations',
    image: '/team/member-08',
  },
  {
    id: 'member-09',
    name: 'Team Member 09',
    role: 'Community Lead',
    image: '/team/member-09',
  },
  {
    id: 'member-10',
    name: 'Team Member 10',
    role: 'Outreach',
    image: '/team/member-10',
  },
  {
    id: 'member-11',
    name: 'Team Member 11',
    role: 'Content & Media',
    image: '/team/member-11',
  },
  {
    id: 'member-12',
    name: 'Team Member 12',
    role: 'Logistics',
    image: '/team/member-12',
  },
];
