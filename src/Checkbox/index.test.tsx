import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { CheckboxGroup, Checkbox } from '.';

// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() })

const props = {
    items:['On', 'off'],
    onCheckboxSelect: jest.fn(),
};
describe('CheckboxGroup should', ()=>{
    test('render 2 checkboxes', () => {
        const wrapper = shallow(<CheckboxGroup {...props} />);
        // console.log(wrapper.debug()) // console.log()
        expect(wrapper.find('Checkbox')).toHaveLength(2);
    }); 
    test('render disabled checkboxes', () => {
        const nProps = {...props, disabled: true}
        const wrapper = shallow(<CheckboxGroup {...nProps} />);
        expect(wrapper.find('.rt-checkbox-group--disabled')).toHaveLength(1)
    });

    test('call onCheckboxSelect with checked checkboxes', () => {
        const nProps = {...props}
        const wrapper = mount(<CheckboxGroup {...nProps} />);
        wrapper.find('Checkbox').at(0).find('.rt-checkbox-item').simulate('click');
        expect(props.onCheckboxSelect).toHaveBeenCalledWith(['On']);
    });

    test('render checkboxes with stacked alignment', () => {
        type Alignment = "inline" | "stacked";
        const alignment: Alignment | undefined = "stacked";
        const nProps = {...props, alignment};
        const wrapper = shallow(<CheckboxGroup {...nProps} />);
        expect(wrapper.find('.rt-checkbox-group--stacked')).toHaveLength(1)
    });
    test('render checked Checkbox with click event simulation', () => {
        const prop ={item: 'On', onItemCheck: jest.fn()};
        const wrapper = shallow(<Checkbox {...prop} />);
        wrapper.find('.rt-checkbox-item').simulate('click');
        expect(prop.onItemCheck).toHaveBeenCalledWith({
            item: 'On',
            isChecked: true,
        });
    })
    test('render disabled Checkbox', () => {
        const prop ={item: 'On', onItemCheck: jest.fn(),  disabled: true};
        const wrapper = shallow(<Checkbox {...prop} />);
        expect(wrapper.find('.rt-checkbox-group--disabled')).toHaveLength(1)
    })
})
// wrapper.find('Checkbox').at(0).simulate('click');
// expect(wrapper.html().includes('<div class="rt-checkbox-group true"></div>')).toBe(true);



// <div class="rt-checkbox-group null rt-checkbox-group--inline">
//     <div class="rt-checkbox-group false">
//         <div class="rt-checkbox-item false">
//             <div class="rt-checkbox-outer"></div>
//             <div class="rt-checkbox-label">On</div>
//         </div>
//     </div>
//     <div class="rt-checkbox-group false">
//         <div class="rt-checkbox-item false">
//             <div class="rt-checkbox-outer"></div>
//             <div class="rt-checkbox-label">off</div>
//         </div>
//     </div>
// </div>

// <div class="rt-checkbox-group null rt-checkbox-group--inline">
//     <div class="rt-checkbox-group false">
//         <div class="rt-checkbox-item false">
//             <div class="rt-checkbox-outer"></div>
//             <div class="rt-checkbox-label">On</div>
//         </div>
//     </div>
//     <div class="rt-checkbox-group false">
//         <div class="rt-checkbox-item false">
//             <div class="rt-checkbox-outer"></div>
//             <div class="rt-checkbox-label">off</div>
//         </div>
//     </div>
// </div>