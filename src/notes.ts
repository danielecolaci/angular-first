export interface Note {
    id: number;
    title: string;
    text: string;
}
export const NOTES: Note[] = [
    {
        id: 1,
        title: 'Project Proposal',
        text: 'The project proposal is due next Friday. We need to ensure that all team members submit their sections by Wednesday for review. The main objectives are to outline the project goals, deliverables, and timeline, as well as to provide an initial budget estimate. Let’s also make sure to include a risk management plan to address potential challenges.',
    },
    {
        id: 2,
        title: 'Meeting with Client',
        text: 'Had a productive meeting with the client today. They emphasized the importance of meeting the deadline and requested a few changes to the design layout. We need to revise the color scheme and add more interactive features to the homepage. I’ll update the design team on the new requirements. Let’s aim to finalize the changes by the end of the week.',
    },
    {
        id: 3,
        title: 'Team Feedback',
        text: 'Received feedback from the team on the latest sprint. The main issue is the slow performance of the application on mobile devices. We should prioritize optimization for mobile platforms and reduce load times. Some suggested using lighter images and streamlining the code. Let’s discuss this in the next stand-up meeting and allocate resources to address these concerns.',
    },
    {
        id: 4,
        title: 'Marketing Strategy',
        text: 'The marketing strategy for the new product launch will focus on social media engagement and influencer partnerships. We are targeting younger demographics, so our content needs to be visually appealing and shareable. We’ll also run a series of ads on Instagram and TikTok leading up to the release date. A follow-up meeting is scheduled for next Tuesday to finalize the ad creatives.',
    },
    {
        id: 5,
        title: 'Quarterly Report',
        text: 'The quarterly report shows a 15% increase in sales compared to the previous quarter. The majority of the growth is attributed to the new features implemented in the app, which have increased user retention. However, we need to improve customer support response times. I’ll gather more data and provide a full breakdown during the next financial review.',
    },
];

