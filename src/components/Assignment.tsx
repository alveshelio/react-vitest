import Edit from '@mui/icons-material/Edit';
import {Button, Col, List, Popconfirm, Row} from 'antd/es';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

export const DATE_FORMAT = 'YYYY-MM-DD';

export interface PortfolioAssignment {
  id?: number;
  version?: number;
  assignee: string;
  portfolioCode?: string;
  validDateStart: string;
  validDateEnd?: string;
}

interface AssignmentProps {
  assignment: PortfolioAssignment;
  disabled: boolean;
  onAssignmentChange: () => void;
  onAssignmentDelete: () => void;
}

export const Assignment = (props: AssignmentProps) => {
  return (
    <StyledAssignment>
      <List.Item>
        <Row>
          <Col span={20}>
            {props.assignment.assignee}
            {`from ${props.assignment.validDateStart || dayjs().format(DATE_FORMAT)}, to: ${props.assignment.validDateEnd || 'undefined'}`}
          </Col>
          <Col span={2}>
            <Button
              className="icon-button link edit-assignment"
              disabled={props.disabled}
              onClick={props.onAssignmentChange}
              size="small"
            >
                <span
                  className="update-user-assigned"
                >
                  <Edit/>
                </span>
            </Button>
          </Col>
          <Col span={2}>
            <Popconfirm
              disabled={props.disabled}
              title="Confirm Delete"
              onConfirm={props.onAssignmentDelete}
              placement="left"
            >
              <Button
                className="icon-button delete-assignment remove-user-assigned"
                disabled={props.disabled}
                size="small"
              />
            </Popconfirm>
          </Col>
        </Row>
      </List.Item>
    </StyledAssignment>
  );
};

const StyledAssignment = styled.div`
  .ant-col {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &&& .ant-list-item {
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 4px;
  }

  .ant-list-item-action {
    margin-left: 0;

    span.icon-button {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  svg {
    font-size: 16px;
  }

  .edit-assignment svg {
    margin-top: 1px;
  }
`;
