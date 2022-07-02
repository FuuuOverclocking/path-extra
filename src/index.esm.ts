import { path, PathNice, ParsedPathNice } from './auto/path.js';
import { PathNicePosix } from './posix/path.js';
import { PathNiceWin32 } from './win32/path.js';
import type {
    Path,
    PathPosix,
    PathWin32,
    FileSystem,
    ParsedPath,
    FormatInputPathObject,
    PlatformPath,
} from './common/types.js';

/** @category 🌟 */
export default path;

// prettier-ignore
const {
    delimiter, sep, posix, win32,
    basename, dirname, extname, format, isAbsolute, join, normalize, parse,
    relative, resolve, toNamespacedPath,
} = path;

/** @category 🌟 */
export { posix, win32 };

// prettier-ignore
export {
    delimiter, sep,
    basename, dirname, extname, format, isAbsolute, join, normalize, parse,
    relative, resolve, toNamespacedPath,
};

/** @category 🌟 */
export type { Path, PathPosix, PathWin32, PathNice, PathNicePosix, PathNiceWin32 };

export type {
    ParsedPathNice,
    FileSystem,
    ParsedPath,
    FormatInputPathObject,
    PlatformPath,
};
