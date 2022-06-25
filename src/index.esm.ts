import { path } from './auto/path.js';

export default path;

export {
    FileSystem,
    ParsedPath,
    FormatInputPathObject,
    PlatformPath,
} from './common/types.js';

// prettier-ignore
const {
    delimiter, sep, posix, win32,
    basename, dirname, extname, format, isAbsolute, join, normalize, parse,
    relative, resolve, toNamespacedPath,
    PathNice, PathNicePosix, PathNiceWin32
} = path;

// prettier-ignore
export {
    delimiter, sep, posix, win32,
    basename, dirname, extname, format, isAbsolute, join, normalize, parse,
    relative, resolve, toNamespacedPath,
    PathNice, PathNicePosix, PathNiceWin32
};
