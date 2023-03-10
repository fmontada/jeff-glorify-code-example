import { EmblaPluginType } from 'embla-carousel';

export declare function canUseDOM(): boolean;
export declare function areObjectsEqualShallow(
    objectA: {
        [key: string]: any;
    },
    objectB: {
        [key: string]: any;
    },
): boolean;
export declare function sortAndMapPluginToOptions(
    plugins: EmblaPluginType[],
): EmblaPluginType['options'][];
export declare function arePluginsEqual(
    pluginsA: EmblaPluginType[],
    pluginsB: EmblaPluginType[],
): boolean;
