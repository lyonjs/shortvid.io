export type LayerBaseProps = {
	primaryColor?: string;
	secondaryColor?: string;
	decorationUrl?: string;
};

export type DefaultLayerProps = LayerBaseProps & {
	title?: string;
	sponsorLogoUrl?: string;
};
