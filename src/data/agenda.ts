export interface AgendaItem {
  time: string;
  session?: string;
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
        time: '8:00 AM – 9:00 AM', 
        title: 'Registration', 
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
        session: 'Session 1',
        title: 'A Day in a Builder’s Life', 
        speaker: 'Treesa', 
        type: 'session' 
      },
      { 
        time: '10:15 AM – 10:45 AM', 
        title: 'Tea Break & Networking', 
        type: 'break' 
      },
      { 
        time: '10:45 AM – 11:30 AM', 
        session: 'Session 2',
        title: 'Multi-Agent Orchestration: The Future of Intelligent Systems', 
        speaker: 'Palani', 
        type: 'session' 
      },
      { 
        time: '11:30 AM – 12:15 PM', 
        session: 'Session 3',
        title: 'Design Your Life', 
        speaker: 'Ghanashyam', 
        type: 'session' 
      },
      { 
        time: '12:15 PM – 12:30 PM', 
        title: 'What’s Next? + Pre-Lunch Connect', 
        speaker: 'Host', 
        type: 'session' 
      },
      { 
        time: '12:30 PM – 1:45 PM', 
        title: 'Lunch & Networking', 
        type: 'break' 
      },
      { 
        time: '1:45 PM – 2:30 PM', 
        session: 'Session 4',
        title: 'AI & the Modern Enterprise — Connecting People & Process', 
        speaker: 'Kirubaharan', 
        type: 'session' 
      },
      { 
        time: '2:30 PM – 3:00 PM', 
        session: 'Session 5',
        title: 'Connect. Crack. Think. — Interactive Quiz', 
        speaker: 'Audience Activity', 
        type: 'workshop' 
      },
      { 
        time: '3:00 PM – 3:45 PM', 
        session: 'Session 6',
        title: 'Leaders’ Podcast — Questions based on the speakers', 
        speaker: 'Panel: Treesa, Palani, Ghanashyam, Kirubaharan', 
        type: 'session' 
      },
      { 
        time: '3:45 PM – 4:15 PM', 
        session: 'Session 7',
        title: 'Beyond Student Clubs — Building Communities & Creating Impact', 
        speaker: 'Previous SDCs', 
        type: 'session' 
      },
      { 
        time: '4:15 PM – 4:30 PM', 
        session: 'Session 8',
        title: 'Final Talk + Builders’ Spotlight & Awards', 
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
