import React from 'react';
import { shallow, mount } from 'enzyme';
import MapText from './MapText';

function setup() {
  const wrapper = shallow(<MapText />);
  return { wrapper };
}

describe('MapText Test Suite', () => {
  it('Should have a ul', () => {
    const { wrapper } = setup();
    expect(wrapper.find('ul').exists()).toBe(true);
  });

  it('should be selectable by class "map-text"', function() {
    expect(shallow(<MapText />).is('.map-text')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<MapText />).find('.map-text').length).toBe(1);
  });
});
