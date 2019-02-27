import React from 'react';
import { shallow, mount, render } from 'enzyme';

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
  // it('should render without throwing an error', function() {
  //   expect(shallow(<MapText />).contains(<div className="map-text"></div>)).toBe(true);
  // });

  // it('should render to static HTML', function() {
  //   expect(render(<MapText />).text()).toEqual();
  // });
  
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
