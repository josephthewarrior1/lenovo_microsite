// Source: Tracker Lenovo OEM Innovation Forum.xlsx, "Agenda for Bumpers".
// Workbook downloaded from the user-shared Chrome workbook on 10 October 2026.
// Samuel Tan biography:
// https://docs.google.com/document/d/1jiSpzH0yygMBQoJ7xft0DNwyMRPSvQBn/edit
// The user's updated rundown screenshot on 11 October confirms Varin Derjit Singh
// for the morning opening. Speaker portraits come from the supplied 11 October ZIP.
const eventData = {
  siteName: 'OEM Innovation Forum Indonesia',
  speakers: {
    varin: {
      id: 'varin',
      name: 'Varin Derjit Singh',
      role: 'President Director, Lenovo Indonesia',
      portrait: 'speaker-varin-20261011.png',
      initials: 'VS',
      bio: {
        en: 'Varin Derjit Singh is President Director of Lenovo Indonesia.'
      }
    },
    sonny: {
      id: 'sonny',
      name: 'Dr. Sonny Hendra Sudaryana',
      role: 'Director of Digital Ecosystem Development, Ministry of Communication and Digital Affairs (KOMDIGI)',
      portrait: 'speaker-sonny-20261011.png',
      initials: 'SH',
      bio: {
        en: 'Dr. Sonny Hendra Sudaryana is Director of Digital Ecosystem Development at the Ministry of Communication and Digital Affairs (KOMDIGI).'
      }
    },
    omar: {
      id: 'omar',
      name: 'Omar Sjawaldy Anwar',
      role: 'President Commissioner, BNI (2025-Present); Former Deputy President Director & CEO, Pertamina (2009-2010)',
      portrait: 'speaker-omar-20261011.png',
      initials: 'OA',
      bio: {
        en: 'Omar Sjawaldy Anwar is President Commissioner of BNI (2025–present) and was Deputy President Director & CEO of Pertamina (2009–2010).'
      }
    },
    ryan: {
      id: 'ryan',
      name: 'Ryan Renaldy',
      role: 'Country Business Manager OEM, Lenovo Indonesia',
      portrait: 'speaker-ryan-20261011.png',
      initials: 'RR',
      bio: {
        en: 'Ryan Renaldy is Country Business Manager OEM at Lenovo Indonesia.'
      }
    },
    aldrian: {
      id: 'aldrian',
      name: 'Aldrian R. Susantio',
      role: 'Central Asia Pacific Regional Manager Lenovo Account Team, Intel Corporation',
      portrait: 'speaker-aldrian-20261011.png',
      initials: 'AS',
      bio: {
        en: 'Aldrian R. Susantio is Central Asia Pacific Regional Manager Lenovo Account Team at Intel Corporation.'
      }
    },
    azis: {
      id: 'azis',
      name: 'Azis Wonosari',
      role: 'Senior Solution Consultant, Lenovo Indonesia',
      portrait: 'speaker-azis-20261011.png',
      initials: 'AW',
      bio: {
        en: 'Azis Wonosari is Senior Solution Consultant at Lenovo Indonesia.'
      }
    },
    imam: {
      id: 'imam',
      name: 'Imam Munajat',
      role: 'Client Solution Architect (CSA), Lenovo Indonesia',
      portrait: 'speaker-imam-20261011.png',
      initials: 'IM',
      bio: {
        en: 'Imam Munajat is Client Solution Architect (CSA) at Lenovo Indonesia.'
      }
    },
    andi: {
      id: 'andi',
      name: 'Andi Darma',
      role: 'Director, Next Gen AI',
      portrait: 'speaker-andi-20261011.png',
      initials: 'AD',
      bio: {
        en: 'Andi Darma is Director at Next Gen AI.'
      }
    },
    samuel: {
      id: 'samuel',
      name: 'Samuel Tan',
      role: 'CEO & Cofounder, Auk Industries',
      portrait: 'speaker-samuel-20261011.png',
      initials: 'ST',
      bio: {
        en: 'Samuel Tan is CEO and Cofounder of Auk Industries, which uses industrial intelligence and real-time factory data to support manufacturing operations. He previously worked as an Operations Associate at McKinsey, focusing on lean manufacturing and supply chains, and earlier joined General Electric’s Operations Management Leadership Program (OMLP).'
      }
    },
    ricky: {
      id: 'ricky',
      name: 'Ricky Chan',
      role: 'Head of Asia Pacific OEM Solutions, Lenovo',
      portrait: 'speaker-ricky-20261011.png',
      initials: 'RC',
      bio: {
        en: 'Ricky Chan is Head of Asia Pacific OEM Solutions at Lenovo.'
      }
    },
    joni: {
      id: 'joni',
      name: 'Joni Irwanto',
      role: 'Sales Director - Key, Global, and MM Business Account, Lenovo Indonesia',
      portrait: 'speaker-joni-20261011.png',
      initials: 'JI',
      bio: {
        en: 'Joni Irwanto is Sales Director - Key, Global, and MM Business Account at Lenovo Indonesia.'
      }
    },
    naraina: {
      id: 'naraina',
      name: 'Naraina Yogas',
      role: 'CTO, Linknau',
      portrait: 'speaker-naraina-20261011.png',
      initials: 'NY',
      bio: {
        en: 'Naraina Yogas is CTO at Linknau.'
      }
    },
    dany: {
      id: 'dany',
      name: 'Dany Beler',
      role: 'Stand Up Comedy',
      portrait: 'speaker-dany-20261011.png',
      initials: 'DB',
      bio: {
        en: 'Dany Beler appears in the Stand-up Comedy session.'
      }
    }
  },
  sessions: {
    morning: {
      id: 'morning',
      title: 'ISV Partner Innovation Forum',
      tagline: 'Build What’s Next with Lenovo Technology',
      time: '09:00 – 13:00 WIB',
      registration: '08:00 – 09:00 WIB',
      speakerIds: ['varin', 'sonny', 'ryan', 'aldrian', 'azis', 'imam', 'andi', 'samuel', 'ricky'],
      agenda: [
        {
          start: '08:00', end: '09:00', time: '08:00 – 09:00',
          title: 'Registration, Coffee Break, Booth Visit & Networking',
          participants: [{ name: 'KIM', role: '' }], sourceRow: 5
        },
        {
          start: '09:00', end: '09:05', time: '09:00 – 09:05',
          title: 'MC Opening',
          participants: [{ name: 'MC', role: '' }], sourceRow: 6
        },
        {
          start: '09:05', end: '09:15', time: '09:05 – 09:15',
          title: 'Opening Speech by Lenovo Executive',
          participants: [{ speakerId: 'varin', name: 'Varin Derjit Singh', role: 'President Director, Lenovo Indonesia' }],
          sourceRow: 7
        },
        {
          start: '09:15', end: '09:35', time: '09:15 – 09:35',
          title: 'Government Keynote Speech',
          participants: [{ speakerId: 'sonny', name: 'Dr. Sonny Hendra Sudaryana', role: 'Director of Digital Ecosystem Development, Ministry of Communication and Digital Affairs (KOMDIGI)' }],
          sourceRow: 8
        },
        {
          start: '09:35', end: '10:20', time: '09:35 – 10:20',
          title: 'Lenovo OEM Value Presentation',
          participants: [{ speakerId: 'ryan', name: 'Ryan Renaldy', role: 'Country Business Manager OEM, Lenovo Indonesia' }],
          sourceRow: 9
        },
        {
          start: '10:20', end: '10:40', time: '10:20 – 10:40',
          title: 'Intel Presentation',
          participants: [{ speakerId: 'aldrian', name: 'Aldrian R. Susantio', role: 'Central Asia Pacific Regional Manager Lenovo Account Team, Intel Corporation' }],
          sourceRow: 10
        },
        {
          start: '10:40', end: '10:55', time: '10:40 – 10:55',
          title: 'OEM & Advanced Services Presentation',
          participants: [{ speakerId: 'azis', name: 'Azis Wonosari', role: 'Senior Solution Consultant, Lenovo Indonesia' }],
          sourceRow: 11
        },
        {
          start: '10:55', end: '11:15', time: '10:55 – 11:15',
          title: 'ThinkEdge & Workstation Presentation',
          participants: [{ speakerId: 'imam', name: 'Imam Munajat', role: 'Client Solution Architect (CSA), Lenovo Indonesia' }],
          sourceRow: 12
        },
        {
          start: '11:15', end: '11:30', time: '11:15 – 11:30',
          title: 'Showcase 1 - Next Gen AI',
          participants: [{ speakerId: 'andi', name: 'Andi Darma', role: 'Director, Next Gen AI' }],
          sourceRow: 13
        },
        {
          start: '11:30', end: '11:45', time: '11:30 – 11:45',
          title: 'Showcase 2 - AUK Industries',
          participants: [{ speakerId: 'samuel', name: 'Samuel Tan', role: 'CEO & Cofounder, Auk Industries' }],
          sourceRow: 14
        },
        {
          start: '11:45', end: '11:50', time: '11:45 – 11:50',
          title: 'Photo Session & Closing Remarks',
          participants: [{ speakerId: 'ricky', name: 'Ricky Chan', role: 'Head of Asia Pacific OEM Solutions, Lenovo' }],
          sourceRow: 15
        },
        {
          start: '11:50', end: '12:50', time: '11:50 – 12:50',
          title: 'Lunch, Networking & Booth Visit',
          participants: [{ name: 'KIM', role: '' }], sourceRow: 16
        }
      ]
    },
    afternoon: {
      id: 'afternoon',
      title: 'Customer Leader Circle',
      tagline: 'Shaping the Future of Manufacturing in the Age of AI',
      time: '17:00 – 20:00 WIB',
      registration: '17:00 – 18:00 WIB',
      speakerIds: ['omar', 'joni', 'aldrian', 'ryan', 'samuel', 'naraina', 'ricky', 'dany'],
      agenda: [
        {
          start: '17:00', end: '18:00', time: '17:00 – 18:00',
          title: 'Registration, Coffee Break, Booth Visit & Networking',
          participants: [{ name: 'KIM', role: '' }], sourceRow: 22
        },
        {
          start: '18:00', end: '18:05', time: '18:00 – 18:05',
          title: 'MC Opening',
          participants: [{ name: 'MC', role: '' }], sourceRow: 23
        },
        {
          start: '18:05', end: '18:15', time: '18:05 – 18:15',
          title: 'Opening Speech by Lenovo Executive',
          participants: [{ speakerId: 'joni', name: 'Joni Irwanto', role: 'Sales Director - Key, Global, and MM Business Account, Lenovo Indonesia' }],
          sourceRow: 24
        },
        {
          start: '18:15', end: '18:35', time: '18:15 – 18:35',
          title: 'Executive Keynote: The Future of Manufacturing in the Age of AI',
          participants: [{ speakerId: 'omar', name: 'Omar Sjawaldy Anwar', role: 'President Commissioner, BNI (2025-Present); Former Deputy President Director & CEO, Pertamina (2009-2010)' }],
          sourceRow: 25
        },
        {
          start: '18:35', end: '18:50', time: '18:35 – 18:50',
          title: 'Intel Presentation',
          participants: [{ speakerId: 'aldrian', name: 'Aldrian R. Susantio', role: 'Central Asia Pacific Regional Manager Lenovo Account Team, Intel Corporation' }],
          sourceRow: 26
        },
        {
          start: '18:50', end: '19:25', time: '18:50 – 19:25',
          title: 'Fireside Chat: From AI Vision to Manufacturing Transformation',
          participants: [
            { speakerId: 'ryan', name: 'Ryan Renaldy', role: 'Country Business Manager OEM, Lenovo Indonesia', moderator: true },
            { speakerId: 'omar', name: 'Omar Sjawaldy Anwar', role: 'President Commissioner, BNI (2025-Present); Former Deputy President Director & CEO, Pertamina (2009-2010)' },
            { speakerId: 'samuel', name: 'Samuel Tan', role: 'CEO & Cofounder, Auk Industries' },
            { speakerId: 'naraina', name: 'Naraina Yogas', role: 'CTO, Linknau' }
          ],
          sourceRow: 27, sourceRows: [27, 28, 29, 30]
        },
        {
          start: '19:25', end: '19:35', time: '19:25 – 19:35',
          title: 'Open Discussion & Audience Q&A',
          participants: [{ name: 'Ryan Renaldy + Panelists', role: '' }], sourceRow: 31
        },
        {
          start: '19:35', end: '19:45', time: '19:35 – 19:45',
          title: 'Insight Recap, Group Photo & Closing Remarks',
          participants: [{ speakerId: 'ricky', name: 'Ricky Chan', role: 'Head of Asia Pacific OEM Solutions, Lenovo' }],
          sourceRow: 32
        },
        {
          start: '19:45', end: '20:25', time: '19:45 – 20:25',
          title: 'Executive Dinner & Networking',
          participants: [{ name: 'KIM', role: '' }], sourceRow: 33
        },
        {
          start: '20:25', end: '20:45', time: '20:25 – 20:45',
          title: 'Stand-up Comedy',
          participants: [{ speakerId: 'dany', name: 'Dany Beler', role: 'Stand Up Comedy' }],
          sourceRow: 34
        },
        {
          start: '20:45', end: '20:50', time: '20:45 – 20:50',
          title: 'Closing & Networking',
          participants: [{ name: 'KIM', role: '' }], sourceRow: 35
        }
      ]
    }
  }
};
