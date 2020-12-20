// settings/pluginSidebar.js
import { PluginSidebar } from "@wordpress/edit-post";
import ColorOptions from './primaryColor';
import ToggleTitle from './toggleTitle';

const mosaicSettings = () => {
	return <PluginSidebar
		name={'mosaic-settings'}
		icon={'screenoptions'}
		title={'Mosaic Settings'}>
		<div className={'mosaic-settings'}>
			<ToggleTitle metaFieldName={'_mosaic_show_title_block'}/>
			<ColorOptions metaFieldName={'_mosaic_primary_colour'} />
		</div>
	</PluginSidebar>;
}

export default mosaicSettings;
