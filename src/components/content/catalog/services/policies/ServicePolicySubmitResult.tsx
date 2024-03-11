/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { Typography } from 'antd';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ServicePolicySubmitResult({
    msg,
    uuid,
}: {
    msg: string | React.JSX.Element;
    uuid: string;
}): React.JSX.Element {
    const { Paragraph } = Typography;
    const navigate = useNavigate();
    return (
        <div>
            {uuid.length > 0 ? (
                <div className={'service-instance-detail-position'}>
                    Policy ID:&nbsp;
                    <Paragraph
                        className={'service-instance-Paragraph'}
                        copyable={{
                            text: String(uuid),
                            icon: [
                                <CopyOutlined className={'show-details-typography-copy'} key={uuidv4()} />,
                                <CheckOutlined className={'show-details-typography-copy'} key={uuidv4()} />,
                            ],
                        }}
                    >
                        <span
                            onClick={() => {
                                navigate({
                                    pathname: '',
                                    search: createSearchParams({
                                        policyId: uuid,
                                    }).toString(),
                                });
                            }}
                            className={'show-details-typography-copy-info'}
                        >
                            {uuid}
                        </span>
                    </Paragraph>
                </div>
            ) : null}

            {msg}
        </div>
    );
}

export default ServicePolicySubmitResult;
