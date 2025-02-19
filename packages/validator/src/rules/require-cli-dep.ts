// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {Context} from '../context';
import {Rule, RuleType} from './rule';

export class RequireCliDep implements Rule {
  type = RuleType.PackageJSON;

  name = 'require-cli-dep';

  description = '@subql/cli need to be defined as a dependency in the package.json file';

  validate(ctx: Context): boolean {
    const pkgName = '@subql/cli';
    return (
      Object.keys(ctx.data.pkg.devDependencies ?? {}).includes(pkgName) ||
      Object.keys(ctx.data.pkg.dependencies ?? {}).includes(pkgName)
    );
  }
}
