import React from 'react';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import MapText from './MapText';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<MapText />);
  return { wrapper };
}

describe('MapText Test Suite', () => {
  it('Should have a ul', () => {
    const { wrapper } = setup();
    expect(wrapper.find('ul').exists()).toBe(true);
  });
});
