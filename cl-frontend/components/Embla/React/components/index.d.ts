import {
    EmblaCarouselType,
    EmblaOptionsType,
    EmblaPluginType,
} from 'embla-carousel';

declare type EmblaViewportRefType = <ViewportElement extends HTMLElement>(
    instance: ViewportElement | null,
) => void;
export declare type UseEmblaCarouselType = [
    EmblaViewportRefType,
    EmblaCarouselType | undefined,
];
declare function useEmblaCarousel(
    options?: EmblaOptionsType,
    plugins?: EmblaPluginType[],
): UseEmblaCarouselType;
declare namespace useEmblaCarousel {
    var globalOptions:
        | Partial<import('embla-carousel/components/Options').OptionsType>
        | undefined;
}
export default useEmblaCarousel;
