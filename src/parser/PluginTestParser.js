import {
  Component,
  ComponentAttribute,
  DefaultParser,
} from 'leto-modelizer-plugin-core';

/**
 * Plugin test parser.
 */
class PluginTestParser extends DefaultParser {
  /**
   * Indicate if the file can be parsed or not.
   *
   * @param {FileInformation} fileInformation - File to check.
   * @returns {boolean} Boolean that indicate if the file can be parsed or not.
   */
  isParsable(fileInformation) {
    return /.+\.plugin-test\.js/.test(fileInformation.path);
  }

  /**
   * Parse inputs to components
   *
   * @param {FileInput[]} inputs - Inputs to parse.
   */
  parse(inputs = []) {
    this.pluginData.components = [];
    this.pluginData.parseErrors = [];

    inputs.forEach(({ path, content }) => {
      const items = JSON.parse(content);

      items.forEach((item) => {
        const component = new Component({ ...item, path });

        component.definition = this.pluginData.definitions.components
          .find(({ type }) => type === item.type);

        component.attributes = item.attributes
          .map((attribute) => new ComponentAttribute({
            ...attribute,
            definition: component.definition.definedAttributes
              .find(({ name }) => attribute.name === name),
          }));

        this.pluginData.components.push(component);
      });
    });
  }
}

export default PluginTestParser;
