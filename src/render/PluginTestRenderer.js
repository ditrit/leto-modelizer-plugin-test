import { DefaultRender, FileInput } from 'leto-modelizer-plugin-core';

/**
 * Plugin test render.
 */
class PluginTestRenderer extends DefaultRender {
  /**
   * Render components in files.
   *
   * @returns {FileInput[]} Generated files.
   */
  renderFiles() {
    const files = {};

    this.pluginData.components.forEach((component) => {
      const name = component.path || 'default.plugin-test.js';
      component.type = component.definition.type;

      if (!files[name]) {
        files[name] = [];
      }

      files[name].push({
        ...component,
        definition: undefined,
        drawOption: undefined,
        attributes: component.attributes
          .map((attribute) => ({ ...attribute, definition: undefined })),
      });
    });

    return Object.keys(files).reduce((acc, path) => {
      acc.push(new FileInput({
        path,
        content: JSON.stringify(files[path], null, 2),
      }));

      return acc;
    }, []);
  }
}

export default PluginTestRenderer;
