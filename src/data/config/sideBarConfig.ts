export type videoProps = {
	compositionName: string;
	compositionId: string;
	compositionLink: string;
};

export type categoryProps = {
	categoryName: string;
	items: videoProps[];
};

export type CompositionType = 'templates' | 'showcases';

type sideBarNavProps = Record<
	CompositionType,
	{
		iconifyId: string;
		route: string;
		items: (categoryProps | videoProps)[];
	}
>;

export const sideBarNavConfig: sideBarNavProps = {
	templates: {
		iconifyId: 'ic:round-slow-motion-video',
		route: '/templates/',
		items: [
			{
				categoryName: 'events',
				items: [
					{
						compositionName: 'Event',
						compositionId: 'Event',
						compositionLink: 'event',
					},
				],
			},
			{
				categoryName: 'layers',
				items: [
					{
						compositionName: 'Layers',
						compositionId: 'Layers',
						compositionLink: 'layers',
					},
				],
			},
			{
				categoryName: 'meetups',
				items: [
					{
						compositionName: 'Meetup',
						compositionId: 'Meetup',
						compositionLink: 'meetup',
					},
				],
			},
			{
				categoryName: 'sponsors',
				items: [
					{
						compositionName: 'Sponsor',
						compositionId: 'Sponsor',
						compositionLink: 'sponsor',
					},
					{
						compositionName: 'Spotlight New Sponsor',
						compositionId: 'SpotlightNewSponsor',
						compositionLink: 'spotlightNewSponsor',
					},
				],
			},
			{
				categoryName: 'talks',
				items: [
					{
						compositionName: 'Talk',
						compositionId: 'Talk',
						compositionLink: 'talk',
					},
					{
						compositionName: 'Talk Branded',
						compositionId: 'TalkBranded',
						compositionLink: 'talkBranded',
					},
					{
						compositionName: 'Silhouette',
						compositionId: 'Silhouette',
						compositionLink: 'silhouette',
					},
				],
			},
		],
	},
	showcases: {
		iconifyId: 'ph:video',
		route: '/showcases/conferences/',
		items: [
			{
				compositionName: 'Devoxx 2023',
				compositionId: 'Devoxx',
				compositionLink: 'Devoxx',
			},
			{
				compositionName: 'Devoxx 2024',
				compositionId: 'Devoxx2024',
				compositionLink: 'Devoxx2024',
			},
			{
				compositionName: 'Mixit',
				compositionId: 'Mixit',
				compositionLink: 'Mixit',
			},
			{
				compositionName: 'Snowcamp',
				compositionId: 'Snowcamp',
				compositionLink: 'Snowcamp',
			},
			{
				compositionName: 'TouraineTech 2023',
				compositionId: 'TouraineTech',
				compositionLink: 'TouraineTech',
			},
			{
				compositionName: 'Very Tech Trip',
				compositionId: 'VeryTechTrip',
				compositionLink: 'VeryTechTrip',
			},
			{
				compositionName: 'AlpesCraft',
				compositionId: 'AlpesCraft',
				compositionLink: 'AlpesCraft',
			},
			{
				compositionName: 'Camping Des Speakers',
				compositionId: 'CampingDesSpeakers',
				compositionLink: 'CampingDesSpeakers',
			},
			{
				compositionName: 'Volcamp 2023',
				compositionId: 'Volcamp2023',
				compositionLink: 'Volcamp2023',
			},
			{
				compositionName: 'Devfest Nantes 2023',
				compositionId: 'DevfestNantes',
				compositionLink: 'DevfestNantes',
			},
		],
	},
};
