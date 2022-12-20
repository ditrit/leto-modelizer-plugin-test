import {
  DefaultPlugin,
  DefaultData,
} from 'leto-modelizer-plugin-core';
import PluginTestDrawer from 'src/draw/PluginTestDrawer';
import PluginTestMetadata from 'src/metadata/PluginTestMetadata';
import PluginTestParser from 'src/parser/PluginTestParser';
import PluginTestRenderer from 'src/render/PluginTestRenderer';
import { name, version } from 'package.json';

/**
 * Plugin test.
 */
class PluginTest extends DefaultPlugin {
  /**
   * Default constructor.
   */
  constructor() {
    const pluginData = new DefaultData({
      name,
      version,
    });

    super({
      pluginData,
      pluginDrawer: new PluginTestDrawer(pluginData),
      pluginMetadata: new PluginTestMetadata(pluginData),
      pluginParser: new PluginTestParser(pluginData),
      pluginRenderer: new PluginTestRenderer(pluginData),
    });
  }
}

export default PluginTest;
