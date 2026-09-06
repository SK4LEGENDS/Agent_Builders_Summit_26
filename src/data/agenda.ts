export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
}

export interface AgendaDay {
  date: string;
  items: AgendaItem[];
}

export const agenda: AgendaDay[] = [
  {
    date: 'Main Event Schedule',
    items: [
      { 
        time: '7:00 AM – 9:00 AM', 
        title: 'Registration & Breakfast', 
        type: 'break' 
      },
      { 
        time: '9:00 AM – 9:30 AM', 
        title: 'Inauguration & Welcome', 
        speaker: 'Organizers / Guests', 
        type: 'session' 
      },
      { 
        time: '9:30 AM – 10:15 AM', 
        title: "A Day in a Builder's Life", 
        speaker: 'Treesa', 
        type: 'session' 
      },
      { 
        time: '10:15 AM – 11:00 AM', 
        title: 'Multi-Agent Orchestration: The Future of Intelligent Systems', 
        speaker: 'Palani', 
        type: 'session' 
      },
      { 
        time: '11:00 AM – 11:30 AM', 
        title: 'Tea Break & Networking', 
        type: 'break' 
      },
      { 
        time: '11:30 AM – 12:15 PM', 
        title: 'The Future of AI Agents & Agentic Automation', 
        speaker: 'Ghanashyam', 
        type: 'session' 
      },
      { 
        time: '12:15 PM – 12:30 PM', 
        title: "What's Next? + Pre-Lunch Connect", 
        speaker: 'Host', 
        type: 'session' 
      },
      { 
        time: '12:30 PM – 1:45 PM', 
        title: 'Lunch & Networking', 
        type: 'break' 
      },
      { 
        time: '1:45 PM – 2:15 PM', 
        title: 'Build Your Buddy-Style Fast Agent Challenge', 
        speaker: 'Audience / Teams', 
        type: 'workshop' 
      },
      { 
        time: '2:15 PM – 3:00 PM', 
        title: 'AI & the Modern Enterprise — Connecting People & Process', 
        speaker: 'Kirubakaran', 
        type: 'session' 
      },
      { 
        time: '3:00 PM – 3:45 PM', 
        title: "Builders' Podcast — AI, Agents & the Future of Automation", 
        speaker: 'All Speakers / Panel', 
        type: 'session' 
      },
      { 
        time: '3:45 PM – 4:15 PM', 
        title: 'Beyond Student Clubs — Building Communities & Creating Impact', 
        speaker: 'SDCs', 
        type: 'session' 
      },
      { 
        time: '4:15 PM – 4:30 PM', 
        title: "Final Talk + Builders' Spotlight & Awards", 
        speaker: 'Nithin', 
        type: 'session' 
      },
      { 
        time: '4:30 PM onwards', 
        title: 'Grand Photo Session & Networking', 
        speaker: 'All', 
        type: 'break' 
      }
    ]
  }
];
