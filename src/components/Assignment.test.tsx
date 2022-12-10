import { it, expect } from "vitest";
import { render, screen, userEvent } from '../utils/test-utils'

import { vi } from 'vitest';
import { Assignment } from './Assignment'

export const assignmentsMock = [
    {
        assignee: 'Steven Spielberg',
        portfolioCode: 'P0004',
        validDateStart: '2014-06-06',
        validDateEnd: '2014-09-06',
        version: 0,
        id: 6204368100,
    },
    {
        assignee: '1234',
        portfolioCode: 'ESTE_G2',
        validDateStart: '2014-06-06',
        validDateEnd: '2014-09-06',
        version: 0,
        id: 6204368101,
    },
];


describe('<Assignment />', () => {
    const onEditSpy = vi.fn();
    const onDeleteSpy = vi.fn();

    it('displays everything correctly', () => {
        const rtl = render(
          <Assignment
            assignment={assignmentsMock[0]}
            disabled={false}
            onAssignmentChange={onEditSpy}
            onAssignmentDelete={onDeleteSpy}
          />
        );

        expect(rtl.container.querySelector('.ant-list-item').textContent).toEqual(
          'Steven Spielberg (from 2014-06-06 to 2014-09-06)'
        );
        expect(rtl.container.querySelectorAll('.icon-button').length).toEqual(2);
        expect(rtl.container.querySelector('.edit-assignment')).not.toBeDisabled();
        expect(rtl.container.querySelector('.delete-assignment')).not.toBeDisabled();

    });

    // it('is disabled correctly', () => {
    //     render(
    //         <Assignment
    //             assignment={assignmentsMock[0]}
    //     disabled={true}
    //     onAssignmentChange={onEditSpy}
    //     onAssignmentDelete={onDeleteSpy}
    //     />
    // );
    //
    //     expect(rtl.container.querySelector('.ant-list-item').textContent).toEqual(
    //         'Steven Spielberg (from 2014-06-06 to 2014-09-06)'
    //     );
    //     expect(rtl.container.querySelector('.edit-assignment')).toBeDisabled();
    //     expect(rtl.container.querySelector('.delete-assignment')).toBeDisabled();
    // });
    //
    // it('calls callbacks correctly', () => {
    //     const rtl = render(
    //         <Assignment
    //             assignment={assignmentsMock[0]}
    //     disabled={false}
    //     onAssignmentChange={onEditSpy}
    //     onAssignmentDelete={onDeleteSpy}
    //     />
    // );
    //
    //     userEvent.click(rtl.container.querySelector('.edit-assignment'));
    //     expect(onEditSpy).toHaveBeenCalled();
    //
    //     userEvent.click(rtl.container.querySelector('.delete-assignment'));
    //     fireEvent.click(rtl.getByText('OK'));
    //     expect(onDeleteSpy).toHaveBeenCalled();
    // });
});
