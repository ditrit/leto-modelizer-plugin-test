import {
  ComponentAttribute,
  ComponentAttributeDefinition,
  ComponentDefinition,
  DefaultMetadata,
} from 'leto-modelizer-plugin-core';

/**
 * Plugin test metadata.
 */
class PluginTestMetadata extends DefaultMetadata {
  /**
   * Set components definitions in plugin data.
   */
  parse() {
    this.pluginData.definitions = {
      components: [
        new ComponentDefinition({
          type: 'truck',
          isContainer: true,
          childrenTypes: ['box'],
          icon: 'truck',
          model: 'DefaultContainer',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'serial',
              type: 'String',
              required: true,
              rules: {
                regex: '^[0-9]{4}(-[0-9]{4}){3}$',
              },
            }),
          ],
        }),
        new ComponentDefinition({
          type: 'box',
          isContainer: true,
          childrenTypes: ['envelope'],
          parentTypes: ['truck'],
          icon: 'box',
          model: 'DefaultContainer',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'truck',
              type: 'Reference',
              required: true,
              containerRef: 'truck',
            }),
            new ComponentAttributeDefinition({
              name: 'volume',
              type: 'Number',
              required: true,
              rules: {
                min: 1,
                max: 10,
              },
            }),
          ],
        }),
        new ComponentDefinition({
          type: 'envelope',
          isContainer: true,
          childrenTypes: ['paper', 'image', 'money', 'gift'],
          parentTypes: ['box'],
          icon: 'envelope',
          model: 'DefaultContainer',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'box',
              type: 'Reference',
              required: true,
              containerRef: 'box',
            }),
            new ComponentAttributeDefinition({
              name: 'type',
              type: 'String',
              required: true,
              rules: {
                values: ['small', 'medium', 'big'],
              },
            }),
            new ComponentAttributeDefinition({
              name: 'recorded',
              type: 'Boolean',
            }),
          ],
        }),
        new ComponentDefinition({
          type: 'paper',
          parentTypes: ['envelope'],
          icon: 'paper',
          model: 'DefaultModel',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'envelope',
              type: 'Reference',
              required: true,
              containerRef: 'envelope',
            }),
            new ComponentAttributeDefinition({
              name: 'money-attachments',
              type: 'Link',
              linkRef: 'money',
            }),
            new ComponentAttributeDefinition({
              name: 'image-attachments',
              type: 'Link',
              linkRef: 'image',
            }),
          ],
        }),
        new ComponentDefinition({
          type: 'image',
          parentTypes: ['envelope'],
          icon: 'image',
          model: 'DefaultModel',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'envelope',
              type: 'Reference',
              required: true,
              containerRef: 'envelope',
            }),
            new ComponentAttributeDefinition({
              name: 'width',
              type: 'Number',
            }),
            new ComponentAttributeDefinition({
              name: 'height',
              type: 'Number',
            }),
          ],
        }),
        new ComponentDefinition({
          type: 'money',
          parentTypes: ['envelope'],
          icon: 'money',
          model: 'DefaultModel',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'envelope',
              type: 'Reference',
              required: true,
              containerRef: 'envelope',
            }),
            new ComponentAttributeDefinition({
              name: 'price',
              type: 'Number',
            }),
            new ComponentAttributeDefinition({
              name: 'gift-attachments',
              type: 'Link',
              linkRef: 'gift',
            }),
          ],
        }),
        new ComponentDefinition({
          type: 'gift',
          parentTypes: ['envelope'],
          icon: 'gift',
          model: 'DefaultModel',
          definedAttributes: [
            new ComponentAttributeDefinition({
              name: 'envelope',
              type: 'Reference',
              required: true,
              containerRef: 'envelope',
            }),
            new ComponentAttributeDefinition({
              name: 'to',
              type: 'String',
            }),
          ],
        }),
      ],
    };
  }
}

export default PluginTestMetadata;
