export type videoProps = {
	compositionName: string;
	compositionId: string;
	compositionLink: string;
};

export type categoryProps = {
	categoryName: string;
	items: videoProps[];
};

export type CompositionType = 'templates';

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
};
