type LayerBaseProps = {
	primaryColor?: string;
	secondaryColor?: string;
	decorationUrl?: string;
};

type DefaultLayerProps = LayerBaseProps & {
	title?: string;
	sponsorLogoUrl?: string;
};
