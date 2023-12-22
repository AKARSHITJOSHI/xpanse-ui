/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { useMutation } from '@tanstack/react-query';
import { ServiceResourceService } from '../../../../xpanse-api/generated';

export function useServiceStateStartQuery() {
    return useMutation({
        mutationFn: (id: string) => {
            return ServiceResourceService.startService(id);
        },
    });
}
