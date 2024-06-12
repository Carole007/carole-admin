
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GenTable
 * 
 */
export type GenTable = $Result.DefaultSelection<Prisma.$GenTablePayload>
/**
 * Model GenTableColumn
 * 
 */
export type GenTableColumn = $Result.DefaultSelection<Prisma.$GenTableColumnPayload>
/**
 * Model SysConfig
 * 
 */
export type SysConfig = $Result.DefaultSelection<Prisma.$SysConfigPayload>
/**
 * Model SysDept
 * 
 */
export type SysDept = $Result.DefaultSelection<Prisma.$SysDeptPayload>
/**
 * Model SysDictData
 * 
 */
export type SysDictData = $Result.DefaultSelection<Prisma.$SysDictDataPayload>
/**
 * Model SysDictType
 * 
 */
export type SysDictType = $Result.DefaultSelection<Prisma.$SysDictTypePayload>
/**
 * Model SysLogininfor
 * 
 */
export type SysLogininfor = $Result.DefaultSelection<Prisma.$SysLogininforPayload>
/**
 * Model SysMenu
 * 
 */
export type SysMenu = $Result.DefaultSelection<Prisma.$SysMenuPayload>
/**
 * Model SysNotice
 * 
 */
export type SysNotice = $Result.DefaultSelection<Prisma.$SysNoticePayload>
/**
 * Model SysPost
 * 
 */
export type SysPost = $Result.DefaultSelection<Prisma.$SysPostPayload>
/**
 * Model SysUserPost
 * 
 */
export type SysUserPost = $Result.DefaultSelection<Prisma.$SysUserPostPayload>
/**
 * Model SysRoleDept
 * 
 */
export type SysRoleDept = $Result.DefaultSelection<Prisma.$SysRoleDeptPayload>
/**
 * Model SysRoleMenu
 * 
 */
export type SysRoleMenu = $Result.DefaultSelection<Prisma.$SysRoleMenuPayload>
/**
 * Model SysUser
 * 
 */
export type SysUser = $Result.DefaultSelection<Prisma.$SysUserPayload>
/**
 * Model SysRole
 * 
 */
export type SysRole = $Result.DefaultSelection<Prisma.$SysRolePayload>
/**
 * Model SysUserRole
 * 
 */
export type SysUserRole = $Result.DefaultSelection<Prisma.$SysUserRolePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GenTables
 * const genTables = await prisma.genTable.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GenTables
   * const genTables = await prisma.genTable.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.genTable`: Exposes CRUD operations for the **GenTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenTables
    * const genTables = await prisma.genTable.findMany()
    * ```
    */
  get genTable(): Prisma.GenTableDelegate<ExtArgs>;

  /**
   * `prisma.genTableColumn`: Exposes CRUD operations for the **GenTableColumn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenTableColumns
    * const genTableColumns = await prisma.genTableColumn.findMany()
    * ```
    */
  get genTableColumn(): Prisma.GenTableColumnDelegate<ExtArgs>;

  /**
   * `prisma.sysConfig`: Exposes CRUD operations for the **SysConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysConfigs
    * const sysConfigs = await prisma.sysConfig.findMany()
    * ```
    */
  get sysConfig(): Prisma.SysConfigDelegate<ExtArgs>;

  /**
   * `prisma.sysDept`: Exposes CRUD operations for the **SysDept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysDepts
    * const sysDepts = await prisma.sysDept.findMany()
    * ```
    */
  get sysDept(): Prisma.SysDeptDelegate<ExtArgs>;

  /**
   * `prisma.sysDictData`: Exposes CRUD operations for the **SysDictData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysDictData
    * const sysDictData = await prisma.sysDictData.findMany()
    * ```
    */
  get sysDictData(): Prisma.SysDictDataDelegate<ExtArgs>;

  /**
   * `prisma.sysDictType`: Exposes CRUD operations for the **SysDictType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysDictTypes
    * const sysDictTypes = await prisma.sysDictType.findMany()
    * ```
    */
  get sysDictType(): Prisma.SysDictTypeDelegate<ExtArgs>;

  /**
   * `prisma.sysLogininfor`: Exposes CRUD operations for the **SysLogininfor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysLogininfors
    * const sysLogininfors = await prisma.sysLogininfor.findMany()
    * ```
    */
  get sysLogininfor(): Prisma.SysLogininforDelegate<ExtArgs>;

  /**
   * `prisma.sysMenu`: Exposes CRUD operations for the **SysMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysMenus
    * const sysMenus = await prisma.sysMenu.findMany()
    * ```
    */
  get sysMenu(): Prisma.SysMenuDelegate<ExtArgs>;

  /**
   * `prisma.sysNotice`: Exposes CRUD operations for the **SysNotice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysNotices
    * const sysNotices = await prisma.sysNotice.findMany()
    * ```
    */
  get sysNotice(): Prisma.SysNoticeDelegate<ExtArgs>;

  /**
   * `prisma.sysPost`: Exposes CRUD operations for the **SysPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysPosts
    * const sysPosts = await prisma.sysPost.findMany()
    * ```
    */
  get sysPost(): Prisma.SysPostDelegate<ExtArgs>;

  /**
   * `prisma.sysUserPost`: Exposes CRUD operations for the **SysUserPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysUserPosts
    * const sysUserPosts = await prisma.sysUserPost.findMany()
    * ```
    */
  get sysUserPost(): Prisma.SysUserPostDelegate<ExtArgs>;

  /**
   * `prisma.sysRoleDept`: Exposes CRUD operations for the **SysRoleDept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysRoleDepts
    * const sysRoleDepts = await prisma.sysRoleDept.findMany()
    * ```
    */
  get sysRoleDept(): Prisma.SysRoleDeptDelegate<ExtArgs>;

  /**
   * `prisma.sysRoleMenu`: Exposes CRUD operations for the **SysRoleMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysRoleMenus
    * const sysRoleMenus = await prisma.sysRoleMenu.findMany()
    * ```
    */
  get sysRoleMenu(): Prisma.SysRoleMenuDelegate<ExtArgs>;

  /**
   * `prisma.sysUser`: Exposes CRUD operations for the **SysUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysUsers
    * const sysUsers = await prisma.sysUser.findMany()
    * ```
    */
  get sysUser(): Prisma.SysUserDelegate<ExtArgs>;

  /**
   * `prisma.sysRole`: Exposes CRUD operations for the **SysRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysRoles
    * const sysRoles = await prisma.sysRole.findMany()
    * ```
    */
  get sysRole(): Prisma.SysRoleDelegate<ExtArgs>;

  /**
   * `prisma.sysUserRole`: Exposes CRUD operations for the **SysUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysUserRoles
    * const sysUserRoles = await prisma.sysUserRole.findMany()
    * ```
    */
  get sysUserRole(): Prisma.SysUserRoleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    GenTable: 'GenTable',
    GenTableColumn: 'GenTableColumn',
    SysConfig: 'SysConfig',
    SysDept: 'SysDept',
    SysDictData: 'SysDictData',
    SysDictType: 'SysDictType',
    SysLogininfor: 'SysLogininfor',
    SysMenu: 'SysMenu',
    SysNotice: 'SysNotice',
    SysPost: 'SysPost',
    SysUserPost: 'SysUserPost',
    SysRoleDept: 'SysRoleDept',
    SysRoleMenu: 'SysRoleMenu',
    SysUser: 'SysUser',
    SysRole: 'SysRole',
    SysUserRole: 'SysUserRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'genTable' | 'genTableColumn' | 'sysConfig' | 'sysDept' | 'sysDictData' | 'sysDictType' | 'sysLogininfor' | 'sysMenu' | 'sysNotice' | 'sysPost' | 'sysUserPost' | 'sysRoleDept' | 'sysRoleMenu' | 'sysUser' | 'sysRole' | 'sysUserRole'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      GenTable: {
        payload: Prisma.$GenTablePayload<ExtArgs>
        fields: Prisma.GenTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenTableFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenTableFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>
          }
          findFirst: {
            args: Prisma.GenTableFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenTableFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>
          }
          findMany: {
            args: Prisma.GenTableFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>[]
          }
          create: {
            args: Prisma.GenTableCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>
          }
          createMany: {
            args: Prisma.GenTableCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenTableDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>
          }
          update: {
            args: Prisma.GenTableUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>
          }
          deleteMany: {
            args: Prisma.GenTableDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenTableUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenTableUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTablePayload>
          }
          aggregate: {
            args: Prisma.GenTableAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenTable>
          }
          groupBy: {
            args: Prisma.GenTableGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenTableCountArgs<ExtArgs>,
            result: $Utils.Optional<GenTableCountAggregateOutputType> | number
          }
        }
      }
      GenTableColumn: {
        payload: Prisma.$GenTableColumnPayload<ExtArgs>
        fields: Prisma.GenTableColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenTableColumnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenTableColumnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>
          }
          findFirst: {
            args: Prisma.GenTableColumnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenTableColumnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>
          }
          findMany: {
            args: Prisma.GenTableColumnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>[]
          }
          create: {
            args: Prisma.GenTableColumnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>
          }
          createMany: {
            args: Prisma.GenTableColumnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenTableColumnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>
          }
          update: {
            args: Prisma.GenTableColumnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>
          }
          deleteMany: {
            args: Prisma.GenTableColumnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenTableColumnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenTableColumnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenTableColumnPayload>
          }
          aggregate: {
            args: Prisma.GenTableColumnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenTableColumn>
          }
          groupBy: {
            args: Prisma.GenTableColumnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenTableColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenTableColumnCountArgs<ExtArgs>,
            result: $Utils.Optional<GenTableColumnCountAggregateOutputType> | number
          }
        }
      }
      SysConfig: {
        payload: Prisma.$SysConfigPayload<ExtArgs>
        fields: Prisma.SysConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysConfigFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysConfigFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>
          }
          findFirst: {
            args: Prisma.SysConfigFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysConfigFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>
          }
          findMany: {
            args: Prisma.SysConfigFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>[]
          }
          create: {
            args: Prisma.SysConfigCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>
          }
          createMany: {
            args: Prisma.SysConfigCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysConfigDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>
          }
          update: {
            args: Prisma.SysConfigUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>
          }
          deleteMany: {
            args: Prisma.SysConfigDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysConfigUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysConfigUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysConfigPayload>
          }
          aggregate: {
            args: Prisma.SysConfigAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysConfig>
          }
          groupBy: {
            args: Prisma.SysConfigGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysConfigCountArgs<ExtArgs>,
            result: $Utils.Optional<SysConfigCountAggregateOutputType> | number
          }
        }
      }
      SysDept: {
        payload: Prisma.$SysDeptPayload<ExtArgs>
        fields: Prisma.SysDeptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysDeptFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysDeptFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>
          }
          findFirst: {
            args: Prisma.SysDeptFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysDeptFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>
          }
          findMany: {
            args: Prisma.SysDeptFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>[]
          }
          create: {
            args: Prisma.SysDeptCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>
          }
          createMany: {
            args: Prisma.SysDeptCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysDeptDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>
          }
          update: {
            args: Prisma.SysDeptUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>
          }
          deleteMany: {
            args: Prisma.SysDeptDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysDeptUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysDeptUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDeptPayload>
          }
          aggregate: {
            args: Prisma.SysDeptAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysDept>
          }
          groupBy: {
            args: Prisma.SysDeptGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysDeptGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysDeptCountArgs<ExtArgs>,
            result: $Utils.Optional<SysDeptCountAggregateOutputType> | number
          }
        }
      }
      SysDictData: {
        payload: Prisma.$SysDictDataPayload<ExtArgs>
        fields: Prisma.SysDictDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysDictDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysDictDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>
          }
          findFirst: {
            args: Prisma.SysDictDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysDictDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>
          }
          findMany: {
            args: Prisma.SysDictDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>[]
          }
          create: {
            args: Prisma.SysDictDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>
          }
          createMany: {
            args: Prisma.SysDictDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysDictDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>
          }
          update: {
            args: Prisma.SysDictDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>
          }
          deleteMany: {
            args: Prisma.SysDictDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysDictDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysDictDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictDataPayload>
          }
          aggregate: {
            args: Prisma.SysDictDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysDictData>
          }
          groupBy: {
            args: Prisma.SysDictDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysDictDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysDictDataCountArgs<ExtArgs>,
            result: $Utils.Optional<SysDictDataCountAggregateOutputType> | number
          }
        }
      }
      SysDictType: {
        payload: Prisma.$SysDictTypePayload<ExtArgs>
        fields: Prisma.SysDictTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysDictTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysDictTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>
          }
          findFirst: {
            args: Prisma.SysDictTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysDictTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>
          }
          findMany: {
            args: Prisma.SysDictTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>[]
          }
          create: {
            args: Prisma.SysDictTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>
          }
          createMany: {
            args: Prisma.SysDictTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysDictTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>
          }
          update: {
            args: Prisma.SysDictTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>
          }
          deleteMany: {
            args: Prisma.SysDictTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysDictTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysDictTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysDictTypePayload>
          }
          aggregate: {
            args: Prisma.SysDictTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysDictType>
          }
          groupBy: {
            args: Prisma.SysDictTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysDictTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysDictTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<SysDictTypeCountAggregateOutputType> | number
          }
        }
      }
      SysLogininfor: {
        payload: Prisma.$SysLogininforPayload<ExtArgs>
        fields: Prisma.SysLogininforFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysLogininforFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysLogininforFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>
          }
          findFirst: {
            args: Prisma.SysLogininforFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysLogininforFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>
          }
          findMany: {
            args: Prisma.SysLogininforFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>[]
          }
          create: {
            args: Prisma.SysLogininforCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>
          }
          createMany: {
            args: Prisma.SysLogininforCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysLogininforDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>
          }
          update: {
            args: Prisma.SysLogininforUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>
          }
          deleteMany: {
            args: Prisma.SysLogininforDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysLogininforUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysLogininforUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysLogininforPayload>
          }
          aggregate: {
            args: Prisma.SysLogininforAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysLogininfor>
          }
          groupBy: {
            args: Prisma.SysLogininforGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysLogininforGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysLogininforCountArgs<ExtArgs>,
            result: $Utils.Optional<SysLogininforCountAggregateOutputType> | number
          }
        }
      }
      SysMenu: {
        payload: Prisma.$SysMenuPayload<ExtArgs>
        fields: Prisma.SysMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysMenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysMenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>
          }
          findFirst: {
            args: Prisma.SysMenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysMenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>
          }
          findMany: {
            args: Prisma.SysMenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>[]
          }
          create: {
            args: Prisma.SysMenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>
          }
          createMany: {
            args: Prisma.SysMenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysMenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>
          }
          update: {
            args: Prisma.SysMenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>
          }
          deleteMany: {
            args: Prisma.SysMenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysMenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysMenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysMenuPayload>
          }
          aggregate: {
            args: Prisma.SysMenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysMenu>
          }
          groupBy: {
            args: Prisma.SysMenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysMenuCountArgs<ExtArgs>,
            result: $Utils.Optional<SysMenuCountAggregateOutputType> | number
          }
        }
      }
      SysNotice: {
        payload: Prisma.$SysNoticePayload<ExtArgs>
        fields: Prisma.SysNoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysNoticeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysNoticeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>
          }
          findFirst: {
            args: Prisma.SysNoticeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysNoticeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>
          }
          findMany: {
            args: Prisma.SysNoticeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>[]
          }
          create: {
            args: Prisma.SysNoticeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>
          }
          createMany: {
            args: Prisma.SysNoticeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysNoticeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>
          }
          update: {
            args: Prisma.SysNoticeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>
          }
          deleteMany: {
            args: Prisma.SysNoticeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysNoticeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysNoticeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysNoticePayload>
          }
          aggregate: {
            args: Prisma.SysNoticeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysNotice>
          }
          groupBy: {
            args: Prisma.SysNoticeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysNoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysNoticeCountArgs<ExtArgs>,
            result: $Utils.Optional<SysNoticeCountAggregateOutputType> | number
          }
        }
      }
      SysPost: {
        payload: Prisma.$SysPostPayload<ExtArgs>
        fields: Prisma.SysPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysPostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysPostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>
          }
          findFirst: {
            args: Prisma.SysPostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysPostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>
          }
          findMany: {
            args: Prisma.SysPostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>[]
          }
          create: {
            args: Prisma.SysPostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>
          }
          createMany: {
            args: Prisma.SysPostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysPostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>
          }
          update: {
            args: Prisma.SysPostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>
          }
          deleteMany: {
            args: Prisma.SysPostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysPostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysPostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysPostPayload>
          }
          aggregate: {
            args: Prisma.SysPostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysPost>
          }
          groupBy: {
            args: Prisma.SysPostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysPostCountArgs<ExtArgs>,
            result: $Utils.Optional<SysPostCountAggregateOutputType> | number
          }
        }
      }
      SysUserPost: {
        payload: Prisma.$SysUserPostPayload<ExtArgs>
        fields: Prisma.SysUserPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysUserPostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysUserPostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>
          }
          findFirst: {
            args: Prisma.SysUserPostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysUserPostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>
          }
          findMany: {
            args: Prisma.SysUserPostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>[]
          }
          create: {
            args: Prisma.SysUserPostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>
          }
          createMany: {
            args: Prisma.SysUserPostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysUserPostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>
          }
          update: {
            args: Prisma.SysUserPostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>
          }
          deleteMany: {
            args: Prisma.SysUserPostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysUserPostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysUserPostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPostPayload>
          }
          aggregate: {
            args: Prisma.SysUserPostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysUserPost>
          }
          groupBy: {
            args: Prisma.SysUserPostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysUserPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysUserPostCountArgs<ExtArgs>,
            result: $Utils.Optional<SysUserPostCountAggregateOutputType> | number
          }
        }
      }
      SysRoleDept: {
        payload: Prisma.$SysRoleDeptPayload<ExtArgs>
        fields: Prisma.SysRoleDeptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysRoleDeptFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysRoleDeptFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>
          }
          findFirst: {
            args: Prisma.SysRoleDeptFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysRoleDeptFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>
          }
          findMany: {
            args: Prisma.SysRoleDeptFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>[]
          }
          create: {
            args: Prisma.SysRoleDeptCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>
          }
          createMany: {
            args: Prisma.SysRoleDeptCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysRoleDeptDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>
          }
          update: {
            args: Prisma.SysRoleDeptUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>
          }
          deleteMany: {
            args: Prisma.SysRoleDeptDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysRoleDeptUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysRoleDeptUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleDeptPayload>
          }
          aggregate: {
            args: Prisma.SysRoleDeptAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysRoleDept>
          }
          groupBy: {
            args: Prisma.SysRoleDeptGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysRoleDeptGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysRoleDeptCountArgs<ExtArgs>,
            result: $Utils.Optional<SysRoleDeptCountAggregateOutputType> | number
          }
        }
      }
      SysRoleMenu: {
        payload: Prisma.$SysRoleMenuPayload<ExtArgs>
        fields: Prisma.SysRoleMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysRoleMenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysRoleMenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>
          }
          findFirst: {
            args: Prisma.SysRoleMenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysRoleMenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>
          }
          findMany: {
            args: Prisma.SysRoleMenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>[]
          }
          create: {
            args: Prisma.SysRoleMenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>
          }
          createMany: {
            args: Prisma.SysRoleMenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysRoleMenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>
          }
          update: {
            args: Prisma.SysRoleMenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>
          }
          deleteMany: {
            args: Prisma.SysRoleMenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysRoleMenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysRoleMenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRoleMenuPayload>
          }
          aggregate: {
            args: Prisma.SysRoleMenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysRoleMenu>
          }
          groupBy: {
            args: Prisma.SysRoleMenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysRoleMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysRoleMenuCountArgs<ExtArgs>,
            result: $Utils.Optional<SysRoleMenuCountAggregateOutputType> | number
          }
        }
      }
      SysUser: {
        payload: Prisma.$SysUserPayload<ExtArgs>
        fields: Prisma.SysUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>
          }
          findFirst: {
            args: Prisma.SysUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>
          }
          findMany: {
            args: Prisma.SysUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>[]
          }
          create: {
            args: Prisma.SysUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>
          }
          createMany: {
            args: Prisma.SysUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>
          }
          update: {
            args: Prisma.SysUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>
          }
          deleteMany: {
            args: Prisma.SysUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserPayload>
          }
          aggregate: {
            args: Prisma.SysUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysUser>
          }
          groupBy: {
            args: Prisma.SysUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysUserCountArgs<ExtArgs>,
            result: $Utils.Optional<SysUserCountAggregateOutputType> | number
          }
        }
      }
      SysRole: {
        payload: Prisma.$SysRolePayload<ExtArgs>
        fields: Prisma.SysRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>
          }
          findFirst: {
            args: Prisma.SysRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>
          }
          findMany: {
            args: Prisma.SysRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>[]
          }
          create: {
            args: Prisma.SysRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>
          }
          createMany: {
            args: Prisma.SysRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>
          }
          update: {
            args: Prisma.SysRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>
          }
          deleteMany: {
            args: Prisma.SysRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysRolePayload>
          }
          aggregate: {
            args: Prisma.SysRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysRole>
          }
          groupBy: {
            args: Prisma.SysRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<SysRoleCountAggregateOutputType> | number
          }
        }
      }
      SysUserRole: {
        payload: Prisma.$SysUserRolePayload<ExtArgs>
        fields: Prisma.SysUserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SysUserRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SysUserRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>
          }
          findFirst: {
            args: Prisma.SysUserRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SysUserRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>
          }
          findMany: {
            args: Prisma.SysUserRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>[]
          }
          create: {
            args: Prisma.SysUserRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>
          }
          createMany: {
            args: Prisma.SysUserRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SysUserRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>
          }
          update: {
            args: Prisma.SysUserRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>
          }
          deleteMany: {
            args: Prisma.SysUserRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SysUserRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SysUserRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SysUserRolePayload>
          }
          aggregate: {
            args: Prisma.SysUserRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSysUserRole>
          }
          groupBy: {
            args: Prisma.SysUserRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SysUserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SysUserRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<SysUserRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GenTableCountOutputType
   */

  export type GenTableCountOutputType = {
    tableColumns: number
  }

  export type GenTableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableColumns?: boolean | GenTableCountOutputTypeCountTableColumnsArgs
  }

  // Custom InputTypes
  /**
   * GenTableCountOutputType without action
   */
  export type GenTableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableCountOutputType
     */
    select?: GenTableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenTableCountOutputType without action
   */
  export type GenTableCountOutputTypeCountTableColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenTableColumnWhereInput
  }


  /**
   * Count Type SysDeptCountOutputType
   */

  export type SysDeptCountOutputType = {
    users: number
    roles: number
  }

  export type SysDeptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SysDeptCountOutputTypeCountUsersArgs
    roles?: boolean | SysDeptCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * SysDeptCountOutputType without action
   */
  export type SysDeptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDeptCountOutputType
     */
    select?: SysDeptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SysDeptCountOutputType without action
   */
  export type SysDeptCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserWhereInput
  }

  /**
   * SysDeptCountOutputType without action
   */
  export type SysDeptCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleDeptWhereInput
  }


  /**
   * Count Type SysDictTypeCountOutputType
   */

  export type SysDictTypeCountOutputType = {
    dictDatas: number
  }

  export type SysDictTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictDatas?: boolean | SysDictTypeCountOutputTypeCountDictDatasArgs
  }

  // Custom InputTypes
  /**
   * SysDictTypeCountOutputType without action
   */
  export type SysDictTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictTypeCountOutputType
     */
    select?: SysDictTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SysDictTypeCountOutputType without action
   */
  export type SysDictTypeCountOutputTypeCountDictDatasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysDictDataWhereInput
  }


  /**
   * Count Type SysMenuCountOutputType
   */

  export type SysMenuCountOutputType = {
    roles: number
  }

  export type SysMenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | SysMenuCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * SysMenuCountOutputType without action
   */
  export type SysMenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenuCountOutputType
     */
    select?: SysMenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SysMenuCountOutputType without action
   */
  export type SysMenuCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleMenuWhereInput
  }


  /**
   * Count Type SysPostCountOutputType
   */

  export type SysPostCountOutputType = {
    users: number
  }

  export type SysPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SysPostCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SysPostCountOutputType without action
   */
  export type SysPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPostCountOutputType
     */
    select?: SysPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SysPostCountOutputType without action
   */
  export type SysPostCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserPostWhereInput
  }


  /**
   * Count Type SysUserCountOutputType
   */

  export type SysUserCountOutputType = {
    roles: number
    posts: number
  }

  export type SysUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | SysUserCountOutputTypeCountRolesArgs
    posts?: boolean | SysUserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * SysUserCountOutputType without action
   */
  export type SysUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserCountOutputType
     */
    select?: SysUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SysUserCountOutputType without action
   */
  export type SysUserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserRoleWhereInput
  }

  /**
   * SysUserCountOutputType without action
   */
  export type SysUserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserPostWhereInput
  }


  /**
   * Count Type SysRoleCountOutputType
   */

  export type SysRoleCountOutputType = {
    users: number
    menus: number
    depts: number
  }

  export type SysRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SysRoleCountOutputTypeCountUsersArgs
    menus?: boolean | SysRoleCountOutputTypeCountMenusArgs
    depts?: boolean | SysRoleCountOutputTypeCountDeptsArgs
  }

  // Custom InputTypes
  /**
   * SysRoleCountOutputType without action
   */
  export type SysRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleCountOutputType
     */
    select?: SysRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SysRoleCountOutputType without action
   */
  export type SysRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserRoleWhereInput
  }

  /**
   * SysRoleCountOutputType without action
   */
  export type SysRoleCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleMenuWhereInput
  }

  /**
   * SysRoleCountOutputType without action
   */
  export type SysRoleCountOutputTypeCountDeptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleDeptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GenTable
   */

  export type AggregateGenTable = {
    _count: GenTableCountAggregateOutputType | null
    _avg: GenTableAvgAggregateOutputType | null
    _sum: GenTableSumAggregateOutputType | null
    _min: GenTableMinAggregateOutputType | null
    _max: GenTableMaxAggregateOutputType | null
  }

  export type GenTableAvgAggregateOutputType = {
    tableId: number | null
  }

  export type GenTableSumAggregateOutputType = {
    tableId: number | null
  }

  export type GenTableMinAggregateOutputType = {
    tableId: number | null
    tableName: string | null
    tableComment: string | null
    subTableName: string | null
    subTableFkName: string | null
    className: string | null
    tplCategory: string | null
    tplWebType: string | null
    packageName: string | null
    moduleName: string | null
    businessName: string | null
    functionName: string | null
    functionAuthor: string | null
    genType: string | null
    genPath: string | null
    options: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type GenTableMaxAggregateOutputType = {
    tableId: number | null
    tableName: string | null
    tableComment: string | null
    subTableName: string | null
    subTableFkName: string | null
    className: string | null
    tplCategory: string | null
    tplWebType: string | null
    packageName: string | null
    moduleName: string | null
    businessName: string | null
    functionName: string | null
    functionAuthor: string | null
    genType: string | null
    genPath: string | null
    options: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type GenTableCountAggregateOutputType = {
    tableId: number
    tableName: number
    tableComment: number
    subTableName: number
    subTableFkName: number
    className: number
    tplCategory: number
    tplWebType: number
    packageName: number
    moduleName: number
    businessName: number
    functionName: number
    functionAuthor: number
    genType: number
    genPath: number
    options: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type GenTableAvgAggregateInputType = {
    tableId?: true
  }

  export type GenTableSumAggregateInputType = {
    tableId?: true
  }

  export type GenTableMinAggregateInputType = {
    tableId?: true
    tableName?: true
    tableComment?: true
    subTableName?: true
    subTableFkName?: true
    className?: true
    tplCategory?: true
    tplWebType?: true
    packageName?: true
    moduleName?: true
    businessName?: true
    functionName?: true
    functionAuthor?: true
    genType?: true
    genPath?: true
    options?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type GenTableMaxAggregateInputType = {
    tableId?: true
    tableName?: true
    tableComment?: true
    subTableName?: true
    subTableFkName?: true
    className?: true
    tplCategory?: true
    tplWebType?: true
    packageName?: true
    moduleName?: true
    businessName?: true
    functionName?: true
    functionAuthor?: true
    genType?: true
    genPath?: true
    options?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type GenTableCountAggregateInputType = {
    tableId?: true
    tableName?: true
    tableComment?: true
    subTableName?: true
    subTableFkName?: true
    className?: true
    tplCategory?: true
    tplWebType?: true
    packageName?: true
    moduleName?: true
    businessName?: true
    functionName?: true
    functionAuthor?: true
    genType?: true
    genPath?: true
    options?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type GenTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenTable to aggregate.
     */
    where?: GenTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTables to fetch.
     */
    orderBy?: GenTableOrderByWithRelationInput | GenTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenTables
    **/
    _count?: true | GenTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenTableMaxAggregateInputType
  }

  export type GetGenTableAggregateType<T extends GenTableAggregateArgs> = {
        [P in keyof T & keyof AggregateGenTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenTable[P]>
      : GetScalarType<T[P], AggregateGenTable[P]>
  }




  export type GenTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenTableWhereInput
    orderBy?: GenTableOrderByWithAggregationInput | GenTableOrderByWithAggregationInput[]
    by: GenTableScalarFieldEnum[] | GenTableScalarFieldEnum
    having?: GenTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenTableCountAggregateInputType | true
    _avg?: GenTableAvgAggregateInputType
    _sum?: GenTableSumAggregateInputType
    _min?: GenTableMinAggregateInputType
    _max?: GenTableMaxAggregateInputType
  }

  export type GenTableGroupByOutputType = {
    tableId: number
    tableName: string | null
    tableComment: string | null
    subTableName: string | null
    subTableFkName: string | null
    className: string | null
    tplCategory: string | null
    tplWebType: string | null
    packageName: string | null
    moduleName: string | null
    businessName: string | null
    functionName: string | null
    functionAuthor: string | null
    genType: string | null
    genPath: string | null
    options: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: GenTableCountAggregateOutputType | null
    _avg: GenTableAvgAggregateOutputType | null
    _sum: GenTableSumAggregateOutputType | null
    _min: GenTableMinAggregateOutputType | null
    _max: GenTableMaxAggregateOutputType | null
  }

  type GetGenTableGroupByPayload<T extends GenTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenTableGroupByOutputType[P]>
            : GetScalarType<T[P], GenTableGroupByOutputType[P]>
        }
      >
    >


  export type GenTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tableId?: boolean
    tableName?: boolean
    tableComment?: boolean
    subTableName?: boolean
    subTableFkName?: boolean
    className?: boolean
    tplCategory?: boolean
    tplWebType?: boolean
    packageName?: boolean
    moduleName?: boolean
    businessName?: boolean
    functionName?: boolean
    functionAuthor?: boolean
    genType?: boolean
    genPath?: boolean
    options?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    tableColumns?: boolean | GenTable$tableColumnsArgs<ExtArgs>
    _count?: boolean | GenTableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genTable"]>


  export type GenTableSelectScalar = {
    tableId?: boolean
    tableName?: boolean
    tableComment?: boolean
    subTableName?: boolean
    subTableFkName?: boolean
    className?: boolean
    tplCategory?: boolean
    tplWebType?: boolean
    packageName?: boolean
    moduleName?: boolean
    businessName?: boolean
    functionName?: boolean
    functionAuthor?: boolean
    genType?: boolean
    genPath?: boolean
    options?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type GenTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tableId" | "tableName" | "tableComment" | "subTableName" | "subTableFkName" | "className" | "tplCategory" | "tplWebType" | "packageName" | "moduleName" | "businessName" | "functionName" | "functionAuthor" | "genType" | "genPath" | "options" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["genTable"]>
  export type GenTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableColumns?: boolean | GenTable$tableColumnsArgs<ExtArgs>
    _count?: boolean | GenTableCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenTable"
    objects: {
      tableColumns: Prisma.$GenTableColumnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tableId: number
      tableName: string | null
      tableComment: string | null
      subTableName: string | null
      subTableFkName: string | null
      className: string | null
      tplCategory: string | null
      tplWebType: string | null
      packageName: string | null
      moduleName: string | null
      businessName: string | null
      functionName: string | null
      functionAuthor: string | null
      genType: string | null
      genPath: string | null
      options: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["genTable"]>
    composites: {}
  }

  type GenTableGetPayload<S extends boolean | null | undefined | GenTableDefaultArgs> = $Result.GetResult<Prisma.$GenTablePayload, S>

  type GenTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: GenTableCountAggregateInputType | true
    }

  export interface GenTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenTable'], meta: { name: 'GenTable' } }
    /**
     * Find zero or one GenTable that matches the filter.
     * @param {GenTableFindUniqueArgs} args - Arguments to find a GenTable
     * @example
     * // Get one GenTable
     * const genTable = await prisma.genTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenTableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableFindUniqueArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GenTable that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GenTableFindUniqueOrThrowArgs} args - Arguments to find a GenTable
     * @example
     * // Get one GenTable
     * const genTable = await prisma.genTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenTableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GenTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableFindFirstArgs} args - Arguments to find a GenTable
     * @example
     * // Get one GenTable
     * const genTable = await prisma.genTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenTableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableFindFirstArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GenTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableFindFirstOrThrowArgs} args - Arguments to find a GenTable
     * @example
     * // Get one GenTable
     * const genTable = await prisma.genTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenTableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GenTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenTables
     * const genTables = await prisma.genTable.findMany()
     * 
     * // Get first 10 GenTables
     * const genTables = await prisma.genTable.findMany({ take: 10 })
     * 
     * // Only select the `tableId`
     * const genTableWithTableIdOnly = await prisma.genTable.findMany({ select: { tableId: true } })
     * 
    **/
    findMany<T extends GenTableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GenTable.
     * @param {GenTableCreateArgs} args - Arguments to create a GenTable.
     * @example
     * // Create one GenTable
     * const GenTable = await prisma.genTable.create({
     *   data: {
     *     // ... data to create a GenTable
     *   }
     * })
     * 
    **/
    create<T extends GenTableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableCreateArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GenTables.
     * @param {GenTableCreateManyArgs} args - Arguments to create many GenTables.
     * @example
     * // Create many GenTables
     * const genTable = await prisma.genTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GenTableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GenTable.
     * @param {GenTableDeleteArgs} args - Arguments to delete one GenTable.
     * @example
     * // Delete one GenTable
     * const GenTable = await prisma.genTable.delete({
     *   where: {
     *     // ... filter to delete one GenTable
     *   }
     * })
     * 
    **/
    delete<T extends GenTableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableDeleteArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GenTable.
     * @param {GenTableUpdateArgs} args - Arguments to update one GenTable.
     * @example
     * // Update one GenTable
     * const genTable = await prisma.genTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenTableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableUpdateArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GenTables.
     * @param {GenTableDeleteManyArgs} args - Arguments to filter GenTables to delete.
     * @example
     * // Delete a few GenTables
     * const { count } = await prisma.genTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenTableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenTables
     * const genTable = await prisma.genTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenTableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GenTable.
     * @param {GenTableUpsertArgs} args - Arguments to update or create a GenTable.
     * @example
     * // Update or create a GenTable
     * const genTable = await prisma.genTable.upsert({
     *   create: {
     *     // ... data to create a GenTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenTable we want to update
     *   }
     * })
    **/
    upsert<T extends GenTableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableUpsertArgs<ExtArgs>>
    ): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GenTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableCountArgs} args - Arguments to filter GenTables to count.
     * @example
     * // Count the number of GenTables
     * const count = await prisma.genTable.count({
     *   where: {
     *     // ... the filter for the GenTables we want to count
     *   }
     * })
    **/
    count<T extends GenTableCountArgs>(
      args?: Subset<T, GenTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenTableAggregateArgs>(args: Subset<T, GenTableAggregateArgs>): Prisma.PrismaPromise<GetGenTableAggregateType<T>>

    /**
     * Group by GenTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenTableGroupByArgs['orderBy'] }
        : { orderBy?: GenTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenTable model
   */
  readonly fields: GenTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tableColumns<T extends GenTable$tableColumnsArgs<ExtArgs> = {}>(args?: Subset<T, GenTable$tableColumnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GenTable model
   */ 
  interface GenTableFieldRefs {
    readonly tableId: FieldRef<"GenTable", 'Int'>
    readonly tableName: FieldRef<"GenTable", 'String'>
    readonly tableComment: FieldRef<"GenTable", 'String'>
    readonly subTableName: FieldRef<"GenTable", 'String'>
    readonly subTableFkName: FieldRef<"GenTable", 'String'>
    readonly className: FieldRef<"GenTable", 'String'>
    readonly tplCategory: FieldRef<"GenTable", 'String'>
    readonly tplWebType: FieldRef<"GenTable", 'String'>
    readonly packageName: FieldRef<"GenTable", 'String'>
    readonly moduleName: FieldRef<"GenTable", 'String'>
    readonly businessName: FieldRef<"GenTable", 'String'>
    readonly functionName: FieldRef<"GenTable", 'String'>
    readonly functionAuthor: FieldRef<"GenTable", 'String'>
    readonly genType: FieldRef<"GenTable", 'String'>
    readonly genPath: FieldRef<"GenTable", 'String'>
    readonly options: FieldRef<"GenTable", 'String'>
    readonly createBy: FieldRef<"GenTable", 'String'>
    readonly createTime: FieldRef<"GenTable", 'String'>
    readonly updateBy: FieldRef<"GenTable", 'String'>
    readonly updateTime: FieldRef<"GenTable", 'String'>
    readonly remark: FieldRef<"GenTable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenTable findUnique
   */
  export type GenTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * Filter, which GenTable to fetch.
     */
    where: GenTableWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable findUniqueOrThrow
   */
  export type GenTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * Filter, which GenTable to fetch.
     */
    where: GenTableWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable findFirst
   */
  export type GenTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * Filter, which GenTable to fetch.
     */
    where?: GenTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTables to fetch.
     */
    orderBy?: GenTableOrderByWithRelationInput | GenTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenTables.
     */
    cursor?: GenTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenTables.
     */
    distinct?: GenTableScalarFieldEnum | GenTableScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable findFirstOrThrow
   */
  export type GenTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * Filter, which GenTable to fetch.
     */
    where?: GenTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTables to fetch.
     */
    orderBy?: GenTableOrderByWithRelationInput | GenTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenTables.
     */
    cursor?: GenTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenTables.
     */
    distinct?: GenTableScalarFieldEnum | GenTableScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable findMany
   */
  export type GenTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * Filter, which GenTables to fetch.
     */
    where?: GenTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTables to fetch.
     */
    orderBy?: GenTableOrderByWithRelationInput | GenTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenTables.
     */
    cursor?: GenTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTables.
     */
    skip?: number
    distinct?: GenTableScalarFieldEnum | GenTableScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable create
   */
  export type GenTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * The data needed to create a GenTable.
     */
    data?: XOR<GenTableCreateInput, GenTableUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable createMany
   */
  export type GenTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenTables.
     */
    data: GenTableCreateManyInput | GenTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenTable update
   */
  export type GenTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * The data needed to update a GenTable.
     */
    data: XOR<GenTableUpdateInput, GenTableUncheckedUpdateInput>
    /**
     * Choose, which GenTable to update.
     */
    where: GenTableWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable updateMany
   */
  export type GenTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenTables.
     */
    data: XOR<GenTableUpdateManyMutationInput, GenTableUncheckedUpdateManyInput>
    /**
     * Filter which GenTables to update
     */
    where?: GenTableWhereInput
  }

  /**
   * GenTable upsert
   */
  export type GenTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * The filter to search for the GenTable to update in case it exists.
     */
    where: GenTableWhereUniqueInput
    /**
     * In case the GenTable found by the `where` argument doesn't exist, create a new GenTable with this data.
     */
    create: XOR<GenTableCreateInput, GenTableUncheckedCreateInput>
    /**
     * In case the GenTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenTableUpdateInput, GenTableUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable delete
   */
  export type GenTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    /**
     * Filter which GenTable to delete.
     */
    where: GenTableWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTable deleteMany
   */
  export type GenTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenTables to delete
     */
    where?: GenTableWhereInput
  }

  /**
   * GenTable.tableColumns
   */
  export type GenTable$tableColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    where?: GenTableColumnWhereInput
    orderBy?: GenTableColumnOrderByWithRelationInput | GenTableColumnOrderByWithRelationInput[]
    cursor?: GenTableColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenTableColumnScalarFieldEnum | GenTableColumnScalarFieldEnum[]
  }

  /**
   * GenTable without action
   */
  export type GenTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
  }


  /**
   * Model GenTableColumn
   */

  export type AggregateGenTableColumn = {
    _count: GenTableColumnCountAggregateOutputType | null
    _avg: GenTableColumnAvgAggregateOutputType | null
    _sum: GenTableColumnSumAggregateOutputType | null
    _min: GenTableColumnMinAggregateOutputType | null
    _max: GenTableColumnMaxAggregateOutputType | null
  }

  export type GenTableColumnAvgAggregateOutputType = {
    columnId: number | null
    tableId: number | null
    sort: number | null
  }

  export type GenTableColumnSumAggregateOutputType = {
    columnId: number | null
    tableId: number | null
    sort: number | null
  }

  export type GenTableColumnMinAggregateOutputType = {
    columnId: number | null
    tableId: number | null
    columnName: string | null
    columnComment: string | null
    columnType: string | null
    javaType: string | null
    javaField: string | null
    isPk: string | null
    isIncrement: string | null
    isRequired: string | null
    isInsert: string | null
    isEdit: string | null
    isList: string | null
    isQuery: string | null
    queryType: string | null
    htmlType: string | null
    dictType: string | null
    sort: number | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
  }

  export type GenTableColumnMaxAggregateOutputType = {
    columnId: number | null
    tableId: number | null
    columnName: string | null
    columnComment: string | null
    columnType: string | null
    javaType: string | null
    javaField: string | null
    isPk: string | null
    isIncrement: string | null
    isRequired: string | null
    isInsert: string | null
    isEdit: string | null
    isList: string | null
    isQuery: string | null
    queryType: string | null
    htmlType: string | null
    dictType: string | null
    sort: number | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
  }

  export type GenTableColumnCountAggregateOutputType = {
    columnId: number
    tableId: number
    columnName: number
    columnComment: number
    columnType: number
    javaType: number
    javaField: number
    isPk: number
    isIncrement: number
    isRequired: number
    isInsert: number
    isEdit: number
    isList: number
    isQuery: number
    queryType: number
    htmlType: number
    dictType: number
    sort: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    _all: number
  }


  export type GenTableColumnAvgAggregateInputType = {
    columnId?: true
    tableId?: true
    sort?: true
  }

  export type GenTableColumnSumAggregateInputType = {
    columnId?: true
    tableId?: true
    sort?: true
  }

  export type GenTableColumnMinAggregateInputType = {
    columnId?: true
    tableId?: true
    columnName?: true
    columnComment?: true
    columnType?: true
    javaType?: true
    javaField?: true
    isPk?: true
    isIncrement?: true
    isRequired?: true
    isInsert?: true
    isEdit?: true
    isList?: true
    isQuery?: true
    queryType?: true
    htmlType?: true
    dictType?: true
    sort?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
  }

  export type GenTableColumnMaxAggregateInputType = {
    columnId?: true
    tableId?: true
    columnName?: true
    columnComment?: true
    columnType?: true
    javaType?: true
    javaField?: true
    isPk?: true
    isIncrement?: true
    isRequired?: true
    isInsert?: true
    isEdit?: true
    isList?: true
    isQuery?: true
    queryType?: true
    htmlType?: true
    dictType?: true
    sort?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
  }

  export type GenTableColumnCountAggregateInputType = {
    columnId?: true
    tableId?: true
    columnName?: true
    columnComment?: true
    columnType?: true
    javaType?: true
    javaField?: true
    isPk?: true
    isIncrement?: true
    isRequired?: true
    isInsert?: true
    isEdit?: true
    isList?: true
    isQuery?: true
    queryType?: true
    htmlType?: true
    dictType?: true
    sort?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    _all?: true
  }

  export type GenTableColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenTableColumn to aggregate.
     */
    where?: GenTableColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTableColumns to fetch.
     */
    orderBy?: GenTableColumnOrderByWithRelationInput | GenTableColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenTableColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTableColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTableColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenTableColumns
    **/
    _count?: true | GenTableColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenTableColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenTableColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenTableColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenTableColumnMaxAggregateInputType
  }

  export type GetGenTableColumnAggregateType<T extends GenTableColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateGenTableColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenTableColumn[P]>
      : GetScalarType<T[P], AggregateGenTableColumn[P]>
  }




  export type GenTableColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenTableColumnWhereInput
    orderBy?: GenTableColumnOrderByWithAggregationInput | GenTableColumnOrderByWithAggregationInput[]
    by: GenTableColumnScalarFieldEnum[] | GenTableColumnScalarFieldEnum
    having?: GenTableColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenTableColumnCountAggregateInputType | true
    _avg?: GenTableColumnAvgAggregateInputType
    _sum?: GenTableColumnSumAggregateInputType
    _min?: GenTableColumnMinAggregateInputType
    _max?: GenTableColumnMaxAggregateInputType
  }

  export type GenTableColumnGroupByOutputType = {
    columnId: number
    tableId: number | null
    columnName: string | null
    columnComment: string | null
    columnType: string | null
    javaType: string | null
    javaField: string | null
    isPk: string | null
    isIncrement: string | null
    isRequired: string | null
    isInsert: string | null
    isEdit: string | null
    isList: string | null
    isQuery: string | null
    queryType: string | null
    htmlType: string | null
    dictType: string | null
    sort: number | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    _count: GenTableColumnCountAggregateOutputType | null
    _avg: GenTableColumnAvgAggregateOutputType | null
    _sum: GenTableColumnSumAggregateOutputType | null
    _min: GenTableColumnMinAggregateOutputType | null
    _max: GenTableColumnMaxAggregateOutputType | null
  }

  type GetGenTableColumnGroupByPayload<T extends GenTableColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenTableColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenTableColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenTableColumnGroupByOutputType[P]>
            : GetScalarType<T[P], GenTableColumnGroupByOutputType[P]>
        }
      >
    >


  export type GenTableColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    columnId?: boolean
    tableId?: boolean
    columnName?: boolean
    columnComment?: boolean
    columnType?: boolean
    javaType?: boolean
    javaField?: boolean
    isPk?: boolean
    isIncrement?: boolean
    isRequired?: boolean
    isInsert?: boolean
    isEdit?: boolean
    isList?: boolean
    isQuery?: boolean
    queryType?: boolean
    htmlType?: boolean
    dictType?: boolean
    sort?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    table?: boolean | GenTableColumn$tableArgs<ExtArgs>
  }, ExtArgs["result"]["genTableColumn"]>


  export type GenTableColumnSelectScalar = {
    columnId?: boolean
    tableId?: boolean
    columnName?: boolean
    columnComment?: boolean
    columnType?: boolean
    javaType?: boolean
    javaField?: boolean
    isPk?: boolean
    isIncrement?: boolean
    isRequired?: boolean
    isInsert?: boolean
    isEdit?: boolean
    isList?: boolean
    isQuery?: boolean
    queryType?: boolean
    htmlType?: boolean
    dictType?: boolean
    sort?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
  }

  export type GenTableColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"columnId" | "tableId" | "columnName" | "columnComment" | "columnType" | "javaType" | "javaField" | "isPk" | "isIncrement" | "isRequired" | "isInsert" | "isEdit" | "isList" | "isQuery" | "queryType" | "htmlType" | "dictType" | "sort" | "createBy" | "createTime" | "updateBy" | "updateTime", ExtArgs["result"]["genTableColumn"]>
  export type GenTableColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | GenTableColumn$tableArgs<ExtArgs>
  }

  export type $GenTableColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenTableColumn"
    objects: {
      table: Prisma.$GenTablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      columnId: number
      tableId: number | null
      columnName: string | null
      columnComment: string | null
      columnType: string | null
      javaType: string | null
      javaField: string | null
      isPk: string | null
      isIncrement: string | null
      isRequired: string | null
      isInsert: string | null
      isEdit: string | null
      isList: string | null
      isQuery: string | null
      queryType: string | null
      htmlType: string | null
      dictType: string | null
      sort: number | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
    }, ExtArgs["result"]["genTableColumn"]>
    composites: {}
  }

  type GenTableColumnGetPayload<S extends boolean | null | undefined | GenTableColumnDefaultArgs> = $Result.GetResult<Prisma.$GenTableColumnPayload, S>

  type GenTableColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenTableColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: GenTableColumnCountAggregateInputType | true
    }

  export interface GenTableColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenTableColumn'], meta: { name: 'GenTableColumn' } }
    /**
     * Find zero or one GenTableColumn that matches the filter.
     * @param {GenTableColumnFindUniqueArgs} args - Arguments to find a GenTableColumn
     * @example
     * // Get one GenTableColumn
     * const genTableColumn = await prisma.genTableColumn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenTableColumnFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableColumnFindUniqueArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GenTableColumn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GenTableColumnFindUniqueOrThrowArgs} args - Arguments to find a GenTableColumn
     * @example
     * // Get one GenTableColumn
     * const genTableColumn = await prisma.genTableColumn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenTableColumnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableColumnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GenTableColumn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnFindFirstArgs} args - Arguments to find a GenTableColumn
     * @example
     * // Get one GenTableColumn
     * const genTableColumn = await prisma.genTableColumn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenTableColumnFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableColumnFindFirstArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GenTableColumn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnFindFirstOrThrowArgs} args - Arguments to find a GenTableColumn
     * @example
     * // Get one GenTableColumn
     * const genTableColumn = await prisma.genTableColumn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenTableColumnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableColumnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GenTableColumns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenTableColumns
     * const genTableColumns = await prisma.genTableColumn.findMany()
     * 
     * // Get first 10 GenTableColumns
     * const genTableColumns = await prisma.genTableColumn.findMany({ take: 10 })
     * 
     * // Only select the `columnId`
     * const genTableColumnWithColumnIdOnly = await prisma.genTableColumn.findMany({ select: { columnId: true } })
     * 
    **/
    findMany<T extends GenTableColumnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableColumnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GenTableColumn.
     * @param {GenTableColumnCreateArgs} args - Arguments to create a GenTableColumn.
     * @example
     * // Create one GenTableColumn
     * const GenTableColumn = await prisma.genTableColumn.create({
     *   data: {
     *     // ... data to create a GenTableColumn
     *   }
     * })
     * 
    **/
    create<T extends GenTableColumnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableColumnCreateArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GenTableColumns.
     * @param {GenTableColumnCreateManyArgs} args - Arguments to create many GenTableColumns.
     * @example
     * // Create many GenTableColumns
     * const genTableColumn = await prisma.genTableColumn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GenTableColumnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableColumnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GenTableColumn.
     * @param {GenTableColumnDeleteArgs} args - Arguments to delete one GenTableColumn.
     * @example
     * // Delete one GenTableColumn
     * const GenTableColumn = await prisma.genTableColumn.delete({
     *   where: {
     *     // ... filter to delete one GenTableColumn
     *   }
     * })
     * 
    **/
    delete<T extends GenTableColumnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableColumnDeleteArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GenTableColumn.
     * @param {GenTableColumnUpdateArgs} args - Arguments to update one GenTableColumn.
     * @example
     * // Update one GenTableColumn
     * const genTableColumn = await prisma.genTableColumn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenTableColumnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableColumnUpdateArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GenTableColumns.
     * @param {GenTableColumnDeleteManyArgs} args - Arguments to filter GenTableColumns to delete.
     * @example
     * // Delete a few GenTableColumns
     * const { count } = await prisma.genTableColumn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenTableColumnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenTableColumnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenTableColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenTableColumns
     * const genTableColumn = await prisma.genTableColumn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenTableColumnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableColumnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GenTableColumn.
     * @param {GenTableColumnUpsertArgs} args - Arguments to update or create a GenTableColumn.
     * @example
     * // Update or create a GenTableColumn
     * const genTableColumn = await prisma.genTableColumn.upsert({
     *   create: {
     *     // ... data to create a GenTableColumn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenTableColumn we want to update
     *   }
     * })
    **/
    upsert<T extends GenTableColumnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenTableColumnUpsertArgs<ExtArgs>>
    ): Prisma__GenTableColumnClient<$Result.GetResult<Prisma.$GenTableColumnPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GenTableColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnCountArgs} args - Arguments to filter GenTableColumns to count.
     * @example
     * // Count the number of GenTableColumns
     * const count = await prisma.genTableColumn.count({
     *   where: {
     *     // ... the filter for the GenTableColumns we want to count
     *   }
     * })
    **/
    count<T extends GenTableColumnCountArgs>(
      args?: Subset<T, GenTableColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenTableColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenTableColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenTableColumnAggregateArgs>(args: Subset<T, GenTableColumnAggregateArgs>): Prisma.PrismaPromise<GetGenTableColumnAggregateType<T>>

    /**
     * Group by GenTableColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenTableColumnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenTableColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenTableColumnGroupByArgs['orderBy'] }
        : { orderBy?: GenTableColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenTableColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenTableColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenTableColumn model
   */
  readonly fields: GenTableColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenTableColumn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenTableColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    table<T extends GenTableColumn$tableArgs<ExtArgs> = {}>(args?: Subset<T, GenTableColumn$tableArgs<ExtArgs>>): Prisma__GenTableClient<$Result.GetResult<Prisma.$GenTablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GenTableColumn model
   */ 
  interface GenTableColumnFieldRefs {
    readonly columnId: FieldRef<"GenTableColumn", 'Int'>
    readonly tableId: FieldRef<"GenTableColumn", 'Int'>
    readonly columnName: FieldRef<"GenTableColumn", 'String'>
    readonly columnComment: FieldRef<"GenTableColumn", 'String'>
    readonly columnType: FieldRef<"GenTableColumn", 'String'>
    readonly javaType: FieldRef<"GenTableColumn", 'String'>
    readonly javaField: FieldRef<"GenTableColumn", 'String'>
    readonly isPk: FieldRef<"GenTableColumn", 'String'>
    readonly isIncrement: FieldRef<"GenTableColumn", 'String'>
    readonly isRequired: FieldRef<"GenTableColumn", 'String'>
    readonly isInsert: FieldRef<"GenTableColumn", 'String'>
    readonly isEdit: FieldRef<"GenTableColumn", 'String'>
    readonly isList: FieldRef<"GenTableColumn", 'String'>
    readonly isQuery: FieldRef<"GenTableColumn", 'String'>
    readonly queryType: FieldRef<"GenTableColumn", 'String'>
    readonly htmlType: FieldRef<"GenTableColumn", 'String'>
    readonly dictType: FieldRef<"GenTableColumn", 'String'>
    readonly sort: FieldRef<"GenTableColumn", 'Int'>
    readonly createBy: FieldRef<"GenTableColumn", 'String'>
    readonly createTime: FieldRef<"GenTableColumn", 'String'>
    readonly updateBy: FieldRef<"GenTableColumn", 'String'>
    readonly updateTime: FieldRef<"GenTableColumn", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenTableColumn findUnique
   */
  export type GenTableColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * Filter, which GenTableColumn to fetch.
     */
    where: GenTableColumnWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn findUniqueOrThrow
   */
  export type GenTableColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * Filter, which GenTableColumn to fetch.
     */
    where: GenTableColumnWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn findFirst
   */
  export type GenTableColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * Filter, which GenTableColumn to fetch.
     */
    where?: GenTableColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTableColumns to fetch.
     */
    orderBy?: GenTableColumnOrderByWithRelationInput | GenTableColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenTableColumns.
     */
    cursor?: GenTableColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTableColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTableColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenTableColumns.
     */
    distinct?: GenTableColumnScalarFieldEnum | GenTableColumnScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn findFirstOrThrow
   */
  export type GenTableColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * Filter, which GenTableColumn to fetch.
     */
    where?: GenTableColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTableColumns to fetch.
     */
    orderBy?: GenTableColumnOrderByWithRelationInput | GenTableColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenTableColumns.
     */
    cursor?: GenTableColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTableColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTableColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenTableColumns.
     */
    distinct?: GenTableColumnScalarFieldEnum | GenTableColumnScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn findMany
   */
  export type GenTableColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * Filter, which GenTableColumns to fetch.
     */
    where?: GenTableColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenTableColumns to fetch.
     */
    orderBy?: GenTableColumnOrderByWithRelationInput | GenTableColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenTableColumns.
     */
    cursor?: GenTableColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenTableColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenTableColumns.
     */
    skip?: number
    distinct?: GenTableColumnScalarFieldEnum | GenTableColumnScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn create
   */
  export type GenTableColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a GenTableColumn.
     */
    data?: XOR<GenTableColumnCreateInput, GenTableColumnUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn createMany
   */
  export type GenTableColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenTableColumns.
     */
    data: GenTableColumnCreateManyInput | GenTableColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenTableColumn update
   */
  export type GenTableColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a GenTableColumn.
     */
    data: XOR<GenTableColumnUpdateInput, GenTableColumnUncheckedUpdateInput>
    /**
     * Choose, which GenTableColumn to update.
     */
    where: GenTableColumnWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn updateMany
   */
  export type GenTableColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenTableColumns.
     */
    data: XOR<GenTableColumnUpdateManyMutationInput, GenTableColumnUncheckedUpdateManyInput>
    /**
     * Filter which GenTableColumns to update
     */
    where?: GenTableColumnWhereInput
  }

  /**
   * GenTableColumn upsert
   */
  export type GenTableColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the GenTableColumn to update in case it exists.
     */
    where: GenTableColumnWhereUniqueInput
    /**
     * In case the GenTableColumn found by the `where` argument doesn't exist, create a new GenTableColumn with this data.
     */
    create: XOR<GenTableColumnCreateInput, GenTableColumnUncheckedCreateInput>
    /**
     * In case the GenTableColumn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenTableColumnUpdateInput, GenTableColumnUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn delete
   */
  export type GenTableColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
    /**
     * Filter which GenTableColumn to delete.
     */
    where: GenTableColumnWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * GenTableColumn deleteMany
   */
  export type GenTableColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenTableColumns to delete
     */
    where?: GenTableColumnWhereInput
  }

  /**
   * GenTableColumn.table
   */
  export type GenTableColumn$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTable
     */
    select?: GenTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTable
     */
    omit?: GenTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableInclude<ExtArgs> | null
    where?: GenTableWhereInput
  }

  /**
   * GenTableColumn without action
   */
  export type GenTableColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenTableColumn
     */
    select?: GenTableColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenTableColumn
     */
    omit?: GenTableColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenTableColumnInclude<ExtArgs> | null
  }


  /**
   * Model SysConfig
   */

  export type AggregateSysConfig = {
    _count: SysConfigCountAggregateOutputType | null
    _avg: SysConfigAvgAggregateOutputType | null
    _sum: SysConfigSumAggregateOutputType | null
    _min: SysConfigMinAggregateOutputType | null
    _max: SysConfigMaxAggregateOutputType | null
  }

  export type SysConfigAvgAggregateOutputType = {
    configId: number | null
  }

  export type SysConfigSumAggregateOutputType = {
    configId: number | null
  }

  export type SysConfigMinAggregateOutputType = {
    configId: number | null
    configName: string | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysConfigMaxAggregateOutputType = {
    configId: number | null
    configName: string | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysConfigCountAggregateOutputType = {
    configId: number
    configName: number
    configKey: number
    configValue: number
    configType: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysConfigAvgAggregateInputType = {
    configId?: true
  }

  export type SysConfigSumAggregateInputType = {
    configId?: true
  }

  export type SysConfigMinAggregateInputType = {
    configId?: true
    configName?: true
    configKey?: true
    configValue?: true
    configType?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysConfigMaxAggregateInputType = {
    configId?: true
    configName?: true
    configKey?: true
    configValue?: true
    configType?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysConfigCountAggregateInputType = {
    configId?: true
    configName?: true
    configKey?: true
    configValue?: true
    configType?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysConfig to aggregate.
     */
    where?: SysConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysConfigs to fetch.
     */
    orderBy?: SysConfigOrderByWithRelationInput | SysConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysConfigs
    **/
    _count?: true | SysConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysConfigMaxAggregateInputType
  }

  export type GetSysConfigAggregateType<T extends SysConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSysConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysConfig[P]>
      : GetScalarType<T[P], AggregateSysConfig[P]>
  }




  export type SysConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysConfigWhereInput
    orderBy?: SysConfigOrderByWithAggregationInput | SysConfigOrderByWithAggregationInput[]
    by: SysConfigScalarFieldEnum[] | SysConfigScalarFieldEnum
    having?: SysConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysConfigCountAggregateInputType | true
    _avg?: SysConfigAvgAggregateInputType
    _sum?: SysConfigSumAggregateInputType
    _min?: SysConfigMinAggregateInputType
    _max?: SysConfigMaxAggregateInputType
  }

  export type SysConfigGroupByOutputType = {
    configId: number
    configName: string | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysConfigCountAggregateOutputType | null
    _avg: SysConfigAvgAggregateOutputType | null
    _sum: SysConfigSumAggregateOutputType | null
    _min: SysConfigMinAggregateOutputType | null
    _max: SysConfigMaxAggregateOutputType | null
  }

  type GetSysConfigGroupByPayload<T extends SysConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SysConfigGroupByOutputType[P]>
        }
      >
    >


  export type SysConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    configId?: boolean
    configName?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }, ExtArgs["result"]["sysConfig"]>


  export type SysConfigSelectScalar = {
    configId?: boolean
    configName?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"configId" | "configName" | "configKey" | "configValue" | "configType" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysConfig"]>

  export type $SysConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      configId: number
      configName: string | null
      configKey: string | null
      configValue: string | null
      configType: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysConfig"]>
    composites: {}
  }

  type SysConfigGetPayload<S extends boolean | null | undefined | SysConfigDefaultArgs> = $Result.GetResult<Prisma.$SysConfigPayload, S>

  type SysConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysConfigCountAggregateInputType | true
    }

  export interface SysConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysConfig'], meta: { name: 'SysConfig' } }
    /**
     * Find zero or one SysConfig that matches the filter.
     * @param {SysConfigFindUniqueArgs} args - Arguments to find a SysConfig
     * @example
     * // Get one SysConfig
     * const sysConfig = await prisma.sysConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysConfigFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysConfigFindUniqueArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysConfigFindUniqueOrThrowArgs} args - Arguments to find a SysConfig
     * @example
     * // Get one SysConfig
     * const sysConfig = await prisma.sysConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysConfigFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysConfigFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigFindFirstArgs} args - Arguments to find a SysConfig
     * @example
     * // Get one SysConfig
     * const sysConfig = await prisma.sysConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysConfigFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysConfigFindFirstArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigFindFirstOrThrowArgs} args - Arguments to find a SysConfig
     * @example
     * // Get one SysConfig
     * const sysConfig = await prisma.sysConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysConfigFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysConfigFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysConfigs
     * const sysConfigs = await prisma.sysConfig.findMany()
     * 
     * // Get first 10 SysConfigs
     * const sysConfigs = await prisma.sysConfig.findMany({ take: 10 })
     * 
     * // Only select the `configId`
     * const sysConfigWithConfigIdOnly = await prisma.sysConfig.findMany({ select: { configId: true } })
     * 
    **/
    findMany<T extends SysConfigFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysConfigFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysConfig.
     * @param {SysConfigCreateArgs} args - Arguments to create a SysConfig.
     * @example
     * // Create one SysConfig
     * const SysConfig = await prisma.sysConfig.create({
     *   data: {
     *     // ... data to create a SysConfig
     *   }
     * })
     * 
    **/
    create<T extends SysConfigCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysConfigCreateArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysConfigs.
     * @param {SysConfigCreateManyArgs} args - Arguments to create many SysConfigs.
     * @example
     * // Create many SysConfigs
     * const sysConfig = await prisma.sysConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysConfigCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysConfigCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysConfig.
     * @param {SysConfigDeleteArgs} args - Arguments to delete one SysConfig.
     * @example
     * // Delete one SysConfig
     * const SysConfig = await prisma.sysConfig.delete({
     *   where: {
     *     // ... filter to delete one SysConfig
     *   }
     * })
     * 
    **/
    delete<T extends SysConfigDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysConfigDeleteArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysConfig.
     * @param {SysConfigUpdateArgs} args - Arguments to update one SysConfig.
     * @example
     * // Update one SysConfig
     * const sysConfig = await prisma.sysConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysConfigUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysConfigUpdateArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysConfigs.
     * @param {SysConfigDeleteManyArgs} args - Arguments to filter SysConfigs to delete.
     * @example
     * // Delete a few SysConfigs
     * const { count } = await prisma.sysConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysConfigDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysConfigDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysConfigs
     * const sysConfig = await prisma.sysConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysConfigUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysConfigUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysConfig.
     * @param {SysConfigUpsertArgs} args - Arguments to update or create a SysConfig.
     * @example
     * // Update or create a SysConfig
     * const sysConfig = await prisma.sysConfig.upsert({
     *   create: {
     *     // ... data to create a SysConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysConfig we want to update
     *   }
     * })
    **/
    upsert<T extends SysConfigUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysConfigUpsertArgs<ExtArgs>>
    ): Prisma__SysConfigClient<$Result.GetResult<Prisma.$SysConfigPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigCountArgs} args - Arguments to filter SysConfigs to count.
     * @example
     * // Count the number of SysConfigs
     * const count = await prisma.sysConfig.count({
     *   where: {
     *     // ... the filter for the SysConfigs we want to count
     *   }
     * })
    **/
    count<T extends SysConfigCountArgs>(
      args?: Subset<T, SysConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysConfigAggregateArgs>(args: Subset<T, SysConfigAggregateArgs>): Prisma.PrismaPromise<GetSysConfigAggregateType<T>>

    /**
     * Group by SysConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysConfigGroupByArgs['orderBy'] }
        : { orderBy?: SysConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysConfig model
   */
  readonly fields: SysConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysConfig model
   */ 
  interface SysConfigFieldRefs {
    readonly configId: FieldRef<"SysConfig", 'Int'>
    readonly configName: FieldRef<"SysConfig", 'String'>
    readonly configKey: FieldRef<"SysConfig", 'String'>
    readonly configValue: FieldRef<"SysConfig", 'String'>
    readonly configType: FieldRef<"SysConfig", 'String'>
    readonly createBy: FieldRef<"SysConfig", 'String'>
    readonly createTime: FieldRef<"SysConfig", 'String'>
    readonly updateBy: FieldRef<"SysConfig", 'String'>
    readonly updateTime: FieldRef<"SysConfig", 'String'>
    readonly remark: FieldRef<"SysConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysConfig findUnique
   */
  export type SysConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * Filter, which SysConfig to fetch.
     */
    where: SysConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig findUniqueOrThrow
   */
  export type SysConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * Filter, which SysConfig to fetch.
     */
    where: SysConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig findFirst
   */
  export type SysConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * Filter, which SysConfig to fetch.
     */
    where?: SysConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysConfigs to fetch.
     */
    orderBy?: SysConfigOrderByWithRelationInput | SysConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysConfigs.
     */
    cursor?: SysConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysConfigs.
     */
    distinct?: SysConfigScalarFieldEnum | SysConfigScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig findFirstOrThrow
   */
  export type SysConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * Filter, which SysConfig to fetch.
     */
    where?: SysConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysConfigs to fetch.
     */
    orderBy?: SysConfigOrderByWithRelationInput | SysConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysConfigs.
     */
    cursor?: SysConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysConfigs.
     */
    distinct?: SysConfigScalarFieldEnum | SysConfigScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig findMany
   */
  export type SysConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * Filter, which SysConfigs to fetch.
     */
    where?: SysConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysConfigs to fetch.
     */
    orderBy?: SysConfigOrderByWithRelationInput | SysConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysConfigs.
     */
    cursor?: SysConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysConfigs.
     */
    skip?: number
    distinct?: SysConfigScalarFieldEnum | SysConfigScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig create
   */
  export type SysConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SysConfig.
     */
    data?: XOR<SysConfigCreateInput, SysConfigUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig createMany
   */
  export type SysConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysConfigs.
     */
    data: SysConfigCreateManyInput | SysConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysConfig update
   */
  export type SysConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SysConfig.
     */
    data: XOR<SysConfigUpdateInput, SysConfigUncheckedUpdateInput>
    /**
     * Choose, which SysConfig to update.
     */
    where: SysConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig updateMany
   */
  export type SysConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysConfigs.
     */
    data: XOR<SysConfigUpdateManyMutationInput, SysConfigUncheckedUpdateManyInput>
    /**
     * Filter which SysConfigs to update
     */
    where?: SysConfigWhereInput
  }

  /**
   * SysConfig upsert
   */
  export type SysConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SysConfig to update in case it exists.
     */
    where: SysConfigWhereUniqueInput
    /**
     * In case the SysConfig found by the `where` argument doesn't exist, create a new SysConfig with this data.
     */
    create: XOR<SysConfigCreateInput, SysConfigUncheckedCreateInput>
    /**
     * In case the SysConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysConfigUpdateInput, SysConfigUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig delete
   */
  export type SysConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
    /**
     * Filter which SysConfig to delete.
     */
    where: SysConfigWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysConfig deleteMany
   */
  export type SysConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysConfigs to delete
     */
    where?: SysConfigWhereInput
  }

  /**
   * SysConfig without action
   */
  export type SysConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysConfig
     */
    select?: SysConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysConfig
     */
    omit?: SysConfigOmit<ExtArgs> | null
  }


  /**
   * Model SysDept
   */

  export type AggregateSysDept = {
    _count: SysDeptCountAggregateOutputType | null
    _avg: SysDeptAvgAggregateOutputType | null
    _sum: SysDeptSumAggregateOutputType | null
    _min: SysDeptMinAggregateOutputType | null
    _max: SysDeptMaxAggregateOutputType | null
  }

  export type SysDeptAvgAggregateOutputType = {
    deptId: number | null
    parentId: number | null
    orderNum: number | null
  }

  export type SysDeptSumAggregateOutputType = {
    deptId: number | null
    parentId: number | null
    orderNum: number | null
  }

  export type SysDeptMinAggregateOutputType = {
    deptId: number | null
    parentId: number | null
    ancestors: string | null
    deptName: string | null
    orderNum: number | null
    leader: string | null
    phone: string | null
    email: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
  }

  export type SysDeptMaxAggregateOutputType = {
    deptId: number | null
    parentId: number | null
    ancestors: string | null
    deptName: string | null
    orderNum: number | null
    leader: string | null
    phone: string | null
    email: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
  }

  export type SysDeptCountAggregateOutputType = {
    deptId: number
    parentId: number
    ancestors: number
    deptName: number
    orderNum: number
    leader: number
    phone: number
    email: number
    status: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    _all: number
  }


  export type SysDeptAvgAggregateInputType = {
    deptId?: true
    parentId?: true
    orderNum?: true
  }

  export type SysDeptSumAggregateInputType = {
    deptId?: true
    parentId?: true
    orderNum?: true
  }

  export type SysDeptMinAggregateInputType = {
    deptId?: true
    parentId?: true
    ancestors?: true
    deptName?: true
    orderNum?: true
    leader?: true
    phone?: true
    email?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
  }

  export type SysDeptMaxAggregateInputType = {
    deptId?: true
    parentId?: true
    ancestors?: true
    deptName?: true
    orderNum?: true
    leader?: true
    phone?: true
    email?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
  }

  export type SysDeptCountAggregateInputType = {
    deptId?: true
    parentId?: true
    ancestors?: true
    deptName?: true
    orderNum?: true
    leader?: true
    phone?: true
    email?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    _all?: true
  }

  export type SysDeptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysDept to aggregate.
     */
    where?: SysDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDepts to fetch.
     */
    orderBy?: SysDeptOrderByWithRelationInput | SysDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysDepts
    **/
    _count?: true | SysDeptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysDeptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysDeptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysDeptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysDeptMaxAggregateInputType
  }

  export type GetSysDeptAggregateType<T extends SysDeptAggregateArgs> = {
        [P in keyof T & keyof AggregateSysDept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysDept[P]>
      : GetScalarType<T[P], AggregateSysDept[P]>
  }




  export type SysDeptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysDeptWhereInput
    orderBy?: SysDeptOrderByWithAggregationInput | SysDeptOrderByWithAggregationInput[]
    by: SysDeptScalarFieldEnum[] | SysDeptScalarFieldEnum
    having?: SysDeptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysDeptCountAggregateInputType | true
    _avg?: SysDeptAvgAggregateInputType
    _sum?: SysDeptSumAggregateInputType
    _min?: SysDeptMinAggregateInputType
    _max?: SysDeptMaxAggregateInputType
  }

  export type SysDeptGroupByOutputType = {
    deptId: number
    parentId: number | null
    ancestors: string | null
    deptName: string | null
    orderNum: number | null
    leader: string | null
    phone: string | null
    email: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    _count: SysDeptCountAggregateOutputType | null
    _avg: SysDeptAvgAggregateOutputType | null
    _sum: SysDeptSumAggregateOutputType | null
    _min: SysDeptMinAggregateOutputType | null
    _max: SysDeptMaxAggregateOutputType | null
  }

  type GetSysDeptGroupByPayload<T extends SysDeptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysDeptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysDeptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysDeptGroupByOutputType[P]>
            : GetScalarType<T[P], SysDeptGroupByOutputType[P]>
        }
      >
    >


  export type SysDeptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deptId?: boolean
    parentId?: boolean
    ancestors?: boolean
    deptName?: boolean
    orderNum?: boolean
    leader?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    users?: boolean | SysDept$usersArgs<ExtArgs>
    roles?: boolean | SysDept$rolesArgs<ExtArgs>
    _count?: boolean | SysDeptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysDept"]>


  export type SysDeptSelectScalar = {
    deptId?: boolean
    parentId?: boolean
    ancestors?: boolean
    deptName?: boolean
    orderNum?: boolean
    leader?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
  }

  export type SysDeptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deptId" | "parentId" | "ancestors" | "deptName" | "orderNum" | "leader" | "phone" | "email" | "status" | "createBy" | "createTime" | "updateBy" | "updateTime", ExtArgs["result"]["sysDept"]>
  export type SysDeptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SysDept$usersArgs<ExtArgs>
    roles?: boolean | SysDept$rolesArgs<ExtArgs>
    _count?: boolean | SysDeptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SysDeptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysDept"
    objects: {
      users: Prisma.$SysUserPayload<ExtArgs>[]
      roles: Prisma.$SysRoleDeptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deptId: number
      parentId: number | null
      ancestors: string | null
      deptName: string | null
      orderNum: number | null
      leader: string | null
      phone: string | null
      email: string | null
      status: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
    }, ExtArgs["result"]["sysDept"]>
    composites: {}
  }

  type SysDeptGetPayload<S extends boolean | null | undefined | SysDeptDefaultArgs> = $Result.GetResult<Prisma.$SysDeptPayload, S>

  type SysDeptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysDeptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysDeptCountAggregateInputType | true
    }

  export interface SysDeptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysDept'], meta: { name: 'SysDept' } }
    /**
     * Find zero or one SysDept that matches the filter.
     * @param {SysDeptFindUniqueArgs} args - Arguments to find a SysDept
     * @example
     * // Get one SysDept
     * const sysDept = await prisma.sysDept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysDeptFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysDeptFindUniqueArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysDept that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysDeptFindUniqueOrThrowArgs} args - Arguments to find a SysDept
     * @example
     * // Get one SysDept
     * const sysDept = await prisma.sysDept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysDeptFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDeptFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysDept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptFindFirstArgs} args - Arguments to find a SysDept
     * @example
     * // Get one SysDept
     * const sysDept = await prisma.sysDept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysDeptFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDeptFindFirstArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysDept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptFindFirstOrThrowArgs} args - Arguments to find a SysDept
     * @example
     * // Get one SysDept
     * const sysDept = await prisma.sysDept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysDeptFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDeptFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysDepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysDepts
     * const sysDepts = await prisma.sysDept.findMany()
     * 
     * // Get first 10 SysDepts
     * const sysDepts = await prisma.sysDept.findMany({ take: 10 })
     * 
     * // Only select the `deptId`
     * const sysDeptWithDeptIdOnly = await prisma.sysDept.findMany({ select: { deptId: true } })
     * 
    **/
    findMany<T extends SysDeptFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDeptFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysDept.
     * @param {SysDeptCreateArgs} args - Arguments to create a SysDept.
     * @example
     * // Create one SysDept
     * const SysDept = await prisma.sysDept.create({
     *   data: {
     *     // ... data to create a SysDept
     *   }
     * })
     * 
    **/
    create<T extends SysDeptCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysDeptCreateArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysDepts.
     * @param {SysDeptCreateManyArgs} args - Arguments to create many SysDepts.
     * @example
     * // Create many SysDepts
     * const sysDept = await prisma.sysDept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysDeptCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDeptCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysDept.
     * @param {SysDeptDeleteArgs} args - Arguments to delete one SysDept.
     * @example
     * // Delete one SysDept
     * const SysDept = await prisma.sysDept.delete({
     *   where: {
     *     // ... filter to delete one SysDept
     *   }
     * })
     * 
    **/
    delete<T extends SysDeptDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysDeptDeleteArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysDept.
     * @param {SysDeptUpdateArgs} args - Arguments to update one SysDept.
     * @example
     * // Update one SysDept
     * const sysDept = await prisma.sysDept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysDeptUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysDeptUpdateArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysDepts.
     * @param {SysDeptDeleteManyArgs} args - Arguments to filter SysDepts to delete.
     * @example
     * // Delete a few SysDepts
     * const { count } = await prisma.sysDept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysDeptDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDeptDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysDepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysDepts
     * const sysDept = await prisma.sysDept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysDeptUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysDeptUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysDept.
     * @param {SysDeptUpsertArgs} args - Arguments to update or create a SysDept.
     * @example
     * // Update or create a SysDept
     * const sysDept = await prisma.sysDept.upsert({
     *   create: {
     *     // ... data to create a SysDept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysDept we want to update
     *   }
     * })
    **/
    upsert<T extends SysDeptUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysDeptUpsertArgs<ExtArgs>>
    ): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysDepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptCountArgs} args - Arguments to filter SysDepts to count.
     * @example
     * // Count the number of SysDepts
     * const count = await prisma.sysDept.count({
     *   where: {
     *     // ... the filter for the SysDepts we want to count
     *   }
     * })
    **/
    count<T extends SysDeptCountArgs>(
      args?: Subset<T, SysDeptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysDeptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysDept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysDeptAggregateArgs>(args: Subset<T, SysDeptAggregateArgs>): Prisma.PrismaPromise<GetSysDeptAggregateType<T>>

    /**
     * Group by SysDept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDeptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysDeptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysDeptGroupByArgs['orderBy'] }
        : { orderBy?: SysDeptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysDeptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysDeptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysDept model
   */
  readonly fields: SysDeptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysDept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysDeptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends SysDept$usersArgs<ExtArgs> = {}>(args?: Subset<T, SysDept$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    roles<T extends SysDept$rolesArgs<ExtArgs> = {}>(args?: Subset<T, SysDept$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysDept model
   */ 
  interface SysDeptFieldRefs {
    readonly deptId: FieldRef<"SysDept", 'Int'>
    readonly parentId: FieldRef<"SysDept", 'Int'>
    readonly ancestors: FieldRef<"SysDept", 'String'>
    readonly deptName: FieldRef<"SysDept", 'String'>
    readonly orderNum: FieldRef<"SysDept", 'Int'>
    readonly leader: FieldRef<"SysDept", 'String'>
    readonly phone: FieldRef<"SysDept", 'String'>
    readonly email: FieldRef<"SysDept", 'String'>
    readonly status: FieldRef<"SysDept", 'String'>
    readonly createBy: FieldRef<"SysDept", 'String'>
    readonly createTime: FieldRef<"SysDept", 'String'>
    readonly updateBy: FieldRef<"SysDept", 'String'>
    readonly updateTime: FieldRef<"SysDept", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysDept findUnique
   */
  export type SysDeptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysDept to fetch.
     */
    where: SysDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept findUniqueOrThrow
   */
  export type SysDeptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysDept to fetch.
     */
    where: SysDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept findFirst
   */
  export type SysDeptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysDept to fetch.
     */
    where?: SysDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDepts to fetch.
     */
    orderBy?: SysDeptOrderByWithRelationInput | SysDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysDepts.
     */
    cursor?: SysDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysDepts.
     */
    distinct?: SysDeptScalarFieldEnum | SysDeptScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept findFirstOrThrow
   */
  export type SysDeptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysDept to fetch.
     */
    where?: SysDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDepts to fetch.
     */
    orderBy?: SysDeptOrderByWithRelationInput | SysDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysDepts.
     */
    cursor?: SysDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysDepts.
     */
    distinct?: SysDeptScalarFieldEnum | SysDeptScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept findMany
   */
  export type SysDeptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysDepts to fetch.
     */
    where?: SysDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDepts to fetch.
     */
    orderBy?: SysDeptOrderByWithRelationInput | SysDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysDepts.
     */
    cursor?: SysDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDepts.
     */
    skip?: number
    distinct?: SysDeptScalarFieldEnum | SysDeptScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept create
   */
  export type SysDeptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * The data needed to create a SysDept.
     */
    data?: XOR<SysDeptCreateInput, SysDeptUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept createMany
   */
  export type SysDeptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysDepts.
     */
    data: SysDeptCreateManyInput | SysDeptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysDept update
   */
  export type SysDeptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * The data needed to update a SysDept.
     */
    data: XOR<SysDeptUpdateInput, SysDeptUncheckedUpdateInput>
    /**
     * Choose, which SysDept to update.
     */
    where: SysDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept updateMany
   */
  export type SysDeptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysDepts.
     */
    data: XOR<SysDeptUpdateManyMutationInput, SysDeptUncheckedUpdateManyInput>
    /**
     * Filter which SysDepts to update
     */
    where?: SysDeptWhereInput
  }

  /**
   * SysDept upsert
   */
  export type SysDeptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * The filter to search for the SysDept to update in case it exists.
     */
    where: SysDeptWhereUniqueInput
    /**
     * In case the SysDept found by the `where` argument doesn't exist, create a new SysDept with this data.
     */
    create: XOR<SysDeptCreateInput, SysDeptUncheckedCreateInput>
    /**
     * In case the SysDept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysDeptUpdateInput, SysDeptUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept delete
   */
  export type SysDeptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    /**
     * Filter which SysDept to delete.
     */
    where: SysDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDept deleteMany
   */
  export type SysDeptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysDepts to delete
     */
    where?: SysDeptWhereInput
  }

  /**
   * SysDept.users
   */
  export type SysDept$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    where?: SysUserWhereInput
    orderBy?: SysUserOrderByWithRelationInput | SysUserOrderByWithRelationInput[]
    cursor?: SysUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysUserScalarFieldEnum | SysUserScalarFieldEnum[]
  }

  /**
   * SysDept.roles
   */
  export type SysDept$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    where?: SysRoleDeptWhereInput
    orderBy?: SysRoleDeptOrderByWithRelationInput | SysRoleDeptOrderByWithRelationInput[]
    cursor?: SysRoleDeptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysRoleDeptScalarFieldEnum | SysRoleDeptScalarFieldEnum[]
  }

  /**
   * SysDept without action
   */
  export type SysDeptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
  }


  /**
   * Model SysDictData
   */

  export type AggregateSysDictData = {
    _count: SysDictDataCountAggregateOutputType | null
    _avg: SysDictDataAvgAggregateOutputType | null
    _sum: SysDictDataSumAggregateOutputType | null
    _min: SysDictDataMinAggregateOutputType | null
    _max: SysDictDataMaxAggregateOutputType | null
  }

  export type SysDictDataAvgAggregateOutputType = {
    dictCode: number | null
    dictSort: number | null
  }

  export type SysDictDataSumAggregateOutputType = {
    dictCode: number | null
    dictSort: number | null
  }

  export type SysDictDataMinAggregateOutputType = {
    dictCode: number | null
    dictSort: number | null
    dictLabel: string | null
    dictValue: string | null
    dictType: string | null
    cssClass: string | null
    listClass: string | null
    isDefault: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysDictDataMaxAggregateOutputType = {
    dictCode: number | null
    dictSort: number | null
    dictLabel: string | null
    dictValue: string | null
    dictType: string | null
    cssClass: string | null
    listClass: string | null
    isDefault: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysDictDataCountAggregateOutputType = {
    dictCode: number
    dictSort: number
    dictLabel: number
    dictValue: number
    dictType: number
    cssClass: number
    listClass: number
    isDefault: number
    status: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysDictDataAvgAggregateInputType = {
    dictCode?: true
    dictSort?: true
  }

  export type SysDictDataSumAggregateInputType = {
    dictCode?: true
    dictSort?: true
  }

  export type SysDictDataMinAggregateInputType = {
    dictCode?: true
    dictSort?: true
    dictLabel?: true
    dictValue?: true
    dictType?: true
    cssClass?: true
    listClass?: true
    isDefault?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysDictDataMaxAggregateInputType = {
    dictCode?: true
    dictSort?: true
    dictLabel?: true
    dictValue?: true
    dictType?: true
    cssClass?: true
    listClass?: true
    isDefault?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysDictDataCountAggregateInputType = {
    dictCode?: true
    dictSort?: true
    dictLabel?: true
    dictValue?: true
    dictType?: true
    cssClass?: true
    listClass?: true
    isDefault?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysDictDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysDictData to aggregate.
     */
    where?: SysDictDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictData to fetch.
     */
    orderBy?: SysDictDataOrderByWithRelationInput | SysDictDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysDictDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysDictData
    **/
    _count?: true | SysDictDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysDictDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysDictDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysDictDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysDictDataMaxAggregateInputType
  }

  export type GetSysDictDataAggregateType<T extends SysDictDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSysDictData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysDictData[P]>
      : GetScalarType<T[P], AggregateSysDictData[P]>
  }




  export type SysDictDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysDictDataWhereInput
    orderBy?: SysDictDataOrderByWithAggregationInput | SysDictDataOrderByWithAggregationInput[]
    by: SysDictDataScalarFieldEnum[] | SysDictDataScalarFieldEnum
    having?: SysDictDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysDictDataCountAggregateInputType | true
    _avg?: SysDictDataAvgAggregateInputType
    _sum?: SysDictDataSumAggregateInputType
    _min?: SysDictDataMinAggregateInputType
    _max?: SysDictDataMaxAggregateInputType
  }

  export type SysDictDataGroupByOutputType = {
    dictCode: number
    dictSort: number | null
    dictLabel: string | null
    dictValue: string | null
    dictType: string | null
    cssClass: string | null
    listClass: string | null
    isDefault: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysDictDataCountAggregateOutputType | null
    _avg: SysDictDataAvgAggregateOutputType | null
    _sum: SysDictDataSumAggregateOutputType | null
    _min: SysDictDataMinAggregateOutputType | null
    _max: SysDictDataMaxAggregateOutputType | null
  }

  type GetSysDictDataGroupByPayload<T extends SysDictDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysDictDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysDictDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysDictDataGroupByOutputType[P]>
            : GetScalarType<T[P], SysDictDataGroupByOutputType[P]>
        }
      >
    >


  export type SysDictDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dictCode?: boolean
    dictSort?: boolean
    dictLabel?: boolean
    dictValue?: boolean
    dictType?: boolean
    cssClass?: boolean
    listClass?: boolean
    isDefault?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    sysDictType?: boolean | SysDictData$sysDictTypeArgs<ExtArgs>
  }, ExtArgs["result"]["sysDictData"]>


  export type SysDictDataSelectScalar = {
    dictCode?: boolean
    dictSort?: boolean
    dictLabel?: boolean
    dictValue?: boolean
    dictType?: boolean
    cssClass?: boolean
    listClass?: boolean
    isDefault?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysDictDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dictCode" | "dictSort" | "dictLabel" | "dictValue" | "dictType" | "cssClass" | "listClass" | "isDefault" | "status" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysDictData"]>
  export type SysDictDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sysDictType?: boolean | SysDictData$sysDictTypeArgs<ExtArgs>
  }

  export type $SysDictDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysDictData"
    objects: {
      sysDictType: Prisma.$SysDictTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      dictCode: number
      dictSort: number | null
      dictLabel: string | null
      dictValue: string | null
      dictType: string | null
      cssClass: string | null
      listClass: string | null
      isDefault: string | null
      status: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysDictData"]>
    composites: {}
  }

  type SysDictDataGetPayload<S extends boolean | null | undefined | SysDictDataDefaultArgs> = $Result.GetResult<Prisma.$SysDictDataPayload, S>

  type SysDictDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysDictDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysDictDataCountAggregateInputType | true
    }

  export interface SysDictDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysDictData'], meta: { name: 'SysDictData' } }
    /**
     * Find zero or one SysDictData that matches the filter.
     * @param {SysDictDataFindUniqueArgs} args - Arguments to find a SysDictData
     * @example
     * // Get one SysDictData
     * const sysDictData = await prisma.sysDictData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysDictDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictDataFindUniqueArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysDictData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysDictDataFindUniqueOrThrowArgs} args - Arguments to find a SysDictData
     * @example
     * // Get one SysDictData
     * const sysDictData = await prisma.sysDictData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysDictDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysDictData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataFindFirstArgs} args - Arguments to find a SysDictData
     * @example
     * // Get one SysDictData
     * const sysDictData = await prisma.sysDictData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysDictDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictDataFindFirstArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysDictData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataFindFirstOrThrowArgs} args - Arguments to find a SysDictData
     * @example
     * // Get one SysDictData
     * const sysDictData = await prisma.sysDictData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysDictDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysDictData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysDictData
     * const sysDictData = await prisma.sysDictData.findMany()
     * 
     * // Get first 10 SysDictData
     * const sysDictData = await prisma.sysDictData.findMany({ take: 10 })
     * 
     * // Only select the `dictCode`
     * const sysDictDataWithDictCodeOnly = await prisma.sysDictData.findMany({ select: { dictCode: true } })
     * 
    **/
    findMany<T extends SysDictDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysDictData.
     * @param {SysDictDataCreateArgs} args - Arguments to create a SysDictData.
     * @example
     * // Create one SysDictData
     * const SysDictData = await prisma.sysDictData.create({
     *   data: {
     *     // ... data to create a SysDictData
     *   }
     * })
     * 
    **/
    create<T extends SysDictDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictDataCreateArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysDictData.
     * @param {SysDictDataCreateManyArgs} args - Arguments to create many SysDictData.
     * @example
     * // Create many SysDictData
     * const sysDictData = await prisma.sysDictData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysDictDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysDictData.
     * @param {SysDictDataDeleteArgs} args - Arguments to delete one SysDictData.
     * @example
     * // Delete one SysDictData
     * const SysDictData = await prisma.sysDictData.delete({
     *   where: {
     *     // ... filter to delete one SysDictData
     *   }
     * })
     * 
    **/
    delete<T extends SysDictDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictDataDeleteArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysDictData.
     * @param {SysDictDataUpdateArgs} args - Arguments to update one SysDictData.
     * @example
     * // Update one SysDictData
     * const sysDictData = await prisma.sysDictData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysDictDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictDataUpdateArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysDictData.
     * @param {SysDictDataDeleteManyArgs} args - Arguments to filter SysDictData to delete.
     * @example
     * // Delete a few SysDictData
     * const { count } = await prisma.sysDictData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysDictDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysDictData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysDictData
     * const sysDictData = await prisma.sysDictData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysDictDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysDictData.
     * @param {SysDictDataUpsertArgs} args - Arguments to update or create a SysDictData.
     * @example
     * // Update or create a SysDictData
     * const sysDictData = await prisma.sysDictData.upsert({
     *   create: {
     *     // ... data to create a SysDictData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysDictData we want to update
     *   }
     * })
    **/
    upsert<T extends SysDictDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictDataUpsertArgs<ExtArgs>>
    ): Prisma__SysDictDataClient<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysDictData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataCountArgs} args - Arguments to filter SysDictData to count.
     * @example
     * // Count the number of SysDictData
     * const count = await prisma.sysDictData.count({
     *   where: {
     *     // ... the filter for the SysDictData we want to count
     *   }
     * })
    **/
    count<T extends SysDictDataCountArgs>(
      args?: Subset<T, SysDictDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysDictDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysDictData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysDictDataAggregateArgs>(args: Subset<T, SysDictDataAggregateArgs>): Prisma.PrismaPromise<GetSysDictDataAggregateType<T>>

    /**
     * Group by SysDictData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysDictDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysDictDataGroupByArgs['orderBy'] }
        : { orderBy?: SysDictDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysDictDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysDictDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysDictData model
   */
  readonly fields: SysDictDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysDictData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysDictDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sysDictType<T extends SysDictData$sysDictTypeArgs<ExtArgs> = {}>(args?: Subset<T, SysDictData$sysDictTypeArgs<ExtArgs>>): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysDictData model
   */ 
  interface SysDictDataFieldRefs {
    readonly dictCode: FieldRef<"SysDictData", 'Int'>
    readonly dictSort: FieldRef<"SysDictData", 'Int'>
    readonly dictLabel: FieldRef<"SysDictData", 'String'>
    readonly dictValue: FieldRef<"SysDictData", 'String'>
    readonly dictType: FieldRef<"SysDictData", 'String'>
    readonly cssClass: FieldRef<"SysDictData", 'String'>
    readonly listClass: FieldRef<"SysDictData", 'String'>
    readonly isDefault: FieldRef<"SysDictData", 'String'>
    readonly status: FieldRef<"SysDictData", 'String'>
    readonly createBy: FieldRef<"SysDictData", 'String'>
    readonly createTime: FieldRef<"SysDictData", 'String'>
    readonly updateBy: FieldRef<"SysDictData", 'String'>
    readonly updateTime: FieldRef<"SysDictData", 'String'>
    readonly remark: FieldRef<"SysDictData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysDictData findUnique
   */
  export type SysDictDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * Filter, which SysDictData to fetch.
     */
    where: SysDictDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData findUniqueOrThrow
   */
  export type SysDictDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * Filter, which SysDictData to fetch.
     */
    where: SysDictDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData findFirst
   */
  export type SysDictDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * Filter, which SysDictData to fetch.
     */
    where?: SysDictDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictData to fetch.
     */
    orderBy?: SysDictDataOrderByWithRelationInput | SysDictDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysDictData.
     */
    cursor?: SysDictDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysDictData.
     */
    distinct?: SysDictDataScalarFieldEnum | SysDictDataScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData findFirstOrThrow
   */
  export type SysDictDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * Filter, which SysDictData to fetch.
     */
    where?: SysDictDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictData to fetch.
     */
    orderBy?: SysDictDataOrderByWithRelationInput | SysDictDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysDictData.
     */
    cursor?: SysDictDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysDictData.
     */
    distinct?: SysDictDataScalarFieldEnum | SysDictDataScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData findMany
   */
  export type SysDictDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * Filter, which SysDictData to fetch.
     */
    where?: SysDictDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictData to fetch.
     */
    orderBy?: SysDictDataOrderByWithRelationInput | SysDictDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysDictData.
     */
    cursor?: SysDictDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictData.
     */
    skip?: number
    distinct?: SysDictDataScalarFieldEnum | SysDictDataScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData create
   */
  export type SysDictDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SysDictData.
     */
    data?: XOR<SysDictDataCreateInput, SysDictDataUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData createMany
   */
  export type SysDictDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysDictData.
     */
    data: SysDictDataCreateManyInput | SysDictDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysDictData update
   */
  export type SysDictDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SysDictData.
     */
    data: XOR<SysDictDataUpdateInput, SysDictDataUncheckedUpdateInput>
    /**
     * Choose, which SysDictData to update.
     */
    where: SysDictDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData updateMany
   */
  export type SysDictDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysDictData.
     */
    data: XOR<SysDictDataUpdateManyMutationInput, SysDictDataUncheckedUpdateManyInput>
    /**
     * Filter which SysDictData to update
     */
    where?: SysDictDataWhereInput
  }

  /**
   * SysDictData upsert
   */
  export type SysDictDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SysDictData to update in case it exists.
     */
    where: SysDictDataWhereUniqueInput
    /**
     * In case the SysDictData found by the `where` argument doesn't exist, create a new SysDictData with this data.
     */
    create: XOR<SysDictDataCreateInput, SysDictDataUncheckedCreateInput>
    /**
     * In case the SysDictData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysDictDataUpdateInput, SysDictDataUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData delete
   */
  export type SysDictDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    /**
     * Filter which SysDictData to delete.
     */
    where: SysDictDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictData deleteMany
   */
  export type SysDictDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysDictData to delete
     */
    where?: SysDictDataWhereInput
  }

  /**
   * SysDictData.sysDictType
   */
  export type SysDictData$sysDictTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    where?: SysDictTypeWhereInput
  }

  /**
   * SysDictData without action
   */
  export type SysDictDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
  }


  /**
   * Model SysDictType
   */

  export type AggregateSysDictType = {
    _count: SysDictTypeCountAggregateOutputType | null
    _avg: SysDictTypeAvgAggregateOutputType | null
    _sum: SysDictTypeSumAggregateOutputType | null
    _min: SysDictTypeMinAggregateOutputType | null
    _max: SysDictTypeMaxAggregateOutputType | null
  }

  export type SysDictTypeAvgAggregateOutputType = {
    dictId: number | null
  }

  export type SysDictTypeSumAggregateOutputType = {
    dictId: number | null
  }

  export type SysDictTypeMinAggregateOutputType = {
    dictId: number | null
    dictName: string | null
    dictType: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysDictTypeMaxAggregateOutputType = {
    dictId: number | null
    dictName: string | null
    dictType: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysDictTypeCountAggregateOutputType = {
    dictId: number
    dictName: number
    dictType: number
    status: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysDictTypeAvgAggregateInputType = {
    dictId?: true
  }

  export type SysDictTypeSumAggregateInputType = {
    dictId?: true
  }

  export type SysDictTypeMinAggregateInputType = {
    dictId?: true
    dictName?: true
    dictType?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysDictTypeMaxAggregateInputType = {
    dictId?: true
    dictName?: true
    dictType?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysDictTypeCountAggregateInputType = {
    dictId?: true
    dictName?: true
    dictType?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysDictTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysDictType to aggregate.
     */
    where?: SysDictTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictTypes to fetch.
     */
    orderBy?: SysDictTypeOrderByWithRelationInput | SysDictTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysDictTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysDictTypes
    **/
    _count?: true | SysDictTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysDictTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysDictTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysDictTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysDictTypeMaxAggregateInputType
  }

  export type GetSysDictTypeAggregateType<T extends SysDictTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSysDictType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysDictType[P]>
      : GetScalarType<T[P], AggregateSysDictType[P]>
  }




  export type SysDictTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysDictTypeWhereInput
    orderBy?: SysDictTypeOrderByWithAggregationInput | SysDictTypeOrderByWithAggregationInput[]
    by: SysDictTypeScalarFieldEnum[] | SysDictTypeScalarFieldEnum
    having?: SysDictTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysDictTypeCountAggregateInputType | true
    _avg?: SysDictTypeAvgAggregateInputType
    _sum?: SysDictTypeSumAggregateInputType
    _min?: SysDictTypeMinAggregateInputType
    _max?: SysDictTypeMaxAggregateInputType
  }

  export type SysDictTypeGroupByOutputType = {
    dictId: number
    dictName: string | null
    dictType: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysDictTypeCountAggregateOutputType | null
    _avg: SysDictTypeAvgAggregateOutputType | null
    _sum: SysDictTypeSumAggregateOutputType | null
    _min: SysDictTypeMinAggregateOutputType | null
    _max: SysDictTypeMaxAggregateOutputType | null
  }

  type GetSysDictTypeGroupByPayload<T extends SysDictTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysDictTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysDictTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysDictTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SysDictTypeGroupByOutputType[P]>
        }
      >
    >


  export type SysDictTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dictId?: boolean
    dictName?: boolean
    dictType?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    dictDatas?: boolean | SysDictType$dictDatasArgs<ExtArgs>
    _count?: boolean | SysDictTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysDictType"]>


  export type SysDictTypeSelectScalar = {
    dictId?: boolean
    dictName?: boolean
    dictType?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysDictTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dictId" | "dictName" | "dictType" | "status" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysDictType"]>
  export type SysDictTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictDatas?: boolean | SysDictType$dictDatasArgs<ExtArgs>
    _count?: boolean | SysDictTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SysDictTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysDictType"
    objects: {
      dictDatas: Prisma.$SysDictDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dictId: number
      dictName: string | null
      dictType: string | null
      status: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysDictType"]>
    composites: {}
  }

  type SysDictTypeGetPayload<S extends boolean | null | undefined | SysDictTypeDefaultArgs> = $Result.GetResult<Prisma.$SysDictTypePayload, S>

  type SysDictTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysDictTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysDictTypeCountAggregateInputType | true
    }

  export interface SysDictTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysDictType'], meta: { name: 'SysDictType' } }
    /**
     * Find zero or one SysDictType that matches the filter.
     * @param {SysDictTypeFindUniqueArgs} args - Arguments to find a SysDictType
     * @example
     * // Get one SysDictType
     * const sysDictType = await prisma.sysDictType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysDictTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysDictType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysDictTypeFindUniqueOrThrowArgs} args - Arguments to find a SysDictType
     * @example
     * // Get one SysDictType
     * const sysDictType = await prisma.sysDictType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysDictTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysDictType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeFindFirstArgs} args - Arguments to find a SysDictType
     * @example
     * // Get one SysDictType
     * const sysDictType = await prisma.sysDictType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysDictTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictTypeFindFirstArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysDictType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeFindFirstOrThrowArgs} args - Arguments to find a SysDictType
     * @example
     * // Get one SysDictType
     * const sysDictType = await prisma.sysDictType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysDictTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysDictTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysDictTypes
     * const sysDictTypes = await prisma.sysDictType.findMany()
     * 
     * // Get first 10 SysDictTypes
     * const sysDictTypes = await prisma.sysDictType.findMany({ take: 10 })
     * 
     * // Only select the `dictId`
     * const sysDictTypeWithDictIdOnly = await prisma.sysDictType.findMany({ select: { dictId: true } })
     * 
    **/
    findMany<T extends SysDictTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysDictType.
     * @param {SysDictTypeCreateArgs} args - Arguments to create a SysDictType.
     * @example
     * // Create one SysDictType
     * const SysDictType = await prisma.sysDictType.create({
     *   data: {
     *     // ... data to create a SysDictType
     *   }
     * })
     * 
    **/
    create<T extends SysDictTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictTypeCreateArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysDictTypes.
     * @param {SysDictTypeCreateManyArgs} args - Arguments to create many SysDictTypes.
     * @example
     * // Create many SysDictTypes
     * const sysDictType = await prisma.sysDictType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysDictTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysDictType.
     * @param {SysDictTypeDeleteArgs} args - Arguments to delete one SysDictType.
     * @example
     * // Delete one SysDictType
     * const SysDictType = await prisma.sysDictType.delete({
     *   where: {
     *     // ... filter to delete one SysDictType
     *   }
     * })
     * 
    **/
    delete<T extends SysDictTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictTypeDeleteArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysDictType.
     * @param {SysDictTypeUpdateArgs} args - Arguments to update one SysDictType.
     * @example
     * // Update one SysDictType
     * const sysDictType = await prisma.sysDictType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysDictTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictTypeUpdateArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysDictTypes.
     * @param {SysDictTypeDeleteManyArgs} args - Arguments to filter SysDictTypes to delete.
     * @example
     * // Delete a few SysDictTypes
     * const { count } = await prisma.sysDictType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysDictTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysDictTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysDictTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysDictTypes
     * const sysDictType = await prisma.sysDictType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysDictTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysDictType.
     * @param {SysDictTypeUpsertArgs} args - Arguments to update or create a SysDictType.
     * @example
     * // Update or create a SysDictType
     * const sysDictType = await prisma.sysDictType.upsert({
     *   create: {
     *     // ... data to create a SysDictType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysDictType we want to update
     *   }
     * })
    **/
    upsert<T extends SysDictTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysDictTypeUpsertArgs<ExtArgs>>
    ): Prisma__SysDictTypeClient<$Result.GetResult<Prisma.$SysDictTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysDictTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeCountArgs} args - Arguments to filter SysDictTypes to count.
     * @example
     * // Count the number of SysDictTypes
     * const count = await prisma.sysDictType.count({
     *   where: {
     *     // ... the filter for the SysDictTypes we want to count
     *   }
     * })
    **/
    count<T extends SysDictTypeCountArgs>(
      args?: Subset<T, SysDictTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysDictTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysDictType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysDictTypeAggregateArgs>(args: Subset<T, SysDictTypeAggregateArgs>): Prisma.PrismaPromise<GetSysDictTypeAggregateType<T>>

    /**
     * Group by SysDictType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysDictTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysDictTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysDictTypeGroupByArgs['orderBy'] }
        : { orderBy?: SysDictTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysDictTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysDictTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysDictType model
   */
  readonly fields: SysDictTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysDictType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysDictTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dictDatas<T extends SysDictType$dictDatasArgs<ExtArgs> = {}>(args?: Subset<T, SysDictType$dictDatasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysDictDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysDictType model
   */ 
  interface SysDictTypeFieldRefs {
    readonly dictId: FieldRef<"SysDictType", 'Int'>
    readonly dictName: FieldRef<"SysDictType", 'String'>
    readonly dictType: FieldRef<"SysDictType", 'String'>
    readonly status: FieldRef<"SysDictType", 'String'>
    readonly createBy: FieldRef<"SysDictType", 'String'>
    readonly createTime: FieldRef<"SysDictType", 'String'>
    readonly updateBy: FieldRef<"SysDictType", 'String'>
    readonly updateTime: FieldRef<"SysDictType", 'String'>
    readonly remark: FieldRef<"SysDictType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysDictType findUnique
   */
  export type SysDictTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * Filter, which SysDictType to fetch.
     */
    where: SysDictTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType findUniqueOrThrow
   */
  export type SysDictTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * Filter, which SysDictType to fetch.
     */
    where: SysDictTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType findFirst
   */
  export type SysDictTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * Filter, which SysDictType to fetch.
     */
    where?: SysDictTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictTypes to fetch.
     */
    orderBy?: SysDictTypeOrderByWithRelationInput | SysDictTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysDictTypes.
     */
    cursor?: SysDictTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysDictTypes.
     */
    distinct?: SysDictTypeScalarFieldEnum | SysDictTypeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType findFirstOrThrow
   */
  export type SysDictTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * Filter, which SysDictType to fetch.
     */
    where?: SysDictTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictTypes to fetch.
     */
    orderBy?: SysDictTypeOrderByWithRelationInput | SysDictTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysDictTypes.
     */
    cursor?: SysDictTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysDictTypes.
     */
    distinct?: SysDictTypeScalarFieldEnum | SysDictTypeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType findMany
   */
  export type SysDictTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * Filter, which SysDictTypes to fetch.
     */
    where?: SysDictTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysDictTypes to fetch.
     */
    orderBy?: SysDictTypeOrderByWithRelationInput | SysDictTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysDictTypes.
     */
    cursor?: SysDictTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysDictTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysDictTypes.
     */
    skip?: number
    distinct?: SysDictTypeScalarFieldEnum | SysDictTypeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType create
   */
  export type SysDictTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SysDictType.
     */
    data?: XOR<SysDictTypeCreateInput, SysDictTypeUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType createMany
   */
  export type SysDictTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysDictTypes.
     */
    data: SysDictTypeCreateManyInput | SysDictTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysDictType update
   */
  export type SysDictTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SysDictType.
     */
    data: XOR<SysDictTypeUpdateInput, SysDictTypeUncheckedUpdateInput>
    /**
     * Choose, which SysDictType to update.
     */
    where: SysDictTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType updateMany
   */
  export type SysDictTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysDictTypes.
     */
    data: XOR<SysDictTypeUpdateManyMutationInput, SysDictTypeUncheckedUpdateManyInput>
    /**
     * Filter which SysDictTypes to update
     */
    where?: SysDictTypeWhereInput
  }

  /**
   * SysDictType upsert
   */
  export type SysDictTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SysDictType to update in case it exists.
     */
    where: SysDictTypeWhereUniqueInput
    /**
     * In case the SysDictType found by the `where` argument doesn't exist, create a new SysDictType with this data.
     */
    create: XOR<SysDictTypeCreateInput, SysDictTypeUncheckedCreateInput>
    /**
     * In case the SysDictType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysDictTypeUpdateInput, SysDictTypeUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType delete
   */
  export type SysDictTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
    /**
     * Filter which SysDictType to delete.
     */
    where: SysDictTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysDictType deleteMany
   */
  export type SysDictTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysDictTypes to delete
     */
    where?: SysDictTypeWhereInput
  }

  /**
   * SysDictType.dictDatas
   */
  export type SysDictType$dictDatasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictData
     */
    select?: SysDictDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictData
     */
    omit?: SysDictDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictDataInclude<ExtArgs> | null
    where?: SysDictDataWhereInput
    orderBy?: SysDictDataOrderByWithRelationInput | SysDictDataOrderByWithRelationInput[]
    cursor?: SysDictDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysDictDataScalarFieldEnum | SysDictDataScalarFieldEnum[]
  }

  /**
   * SysDictType without action
   */
  export type SysDictTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDictType
     */
    select?: SysDictTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDictType
     */
    omit?: SysDictTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDictTypeInclude<ExtArgs> | null
  }


  /**
   * Model SysLogininfor
   */

  export type AggregateSysLogininfor = {
    _count: SysLogininforCountAggregateOutputType | null
    _avg: SysLogininforAvgAggregateOutputType | null
    _sum: SysLogininforSumAggregateOutputType | null
    _min: SysLogininforMinAggregateOutputType | null
    _max: SysLogininforMaxAggregateOutputType | null
  }

  export type SysLogininforAvgAggregateOutputType = {
    infoId: number | null
  }

  export type SysLogininforSumAggregateOutputType = {
    infoId: number | null
  }

  export type SysLogininforMinAggregateOutputType = {
    infoId: number | null
    userName: string | null
    ipaddr: string | null
    loginLocation: string | null
    browser: string | null
    os: string | null
    status: string | null
    msg: string | null
    loginTime: string | null
  }

  export type SysLogininforMaxAggregateOutputType = {
    infoId: number | null
    userName: string | null
    ipaddr: string | null
    loginLocation: string | null
    browser: string | null
    os: string | null
    status: string | null
    msg: string | null
    loginTime: string | null
  }

  export type SysLogininforCountAggregateOutputType = {
    infoId: number
    userName: number
    ipaddr: number
    loginLocation: number
    browser: number
    os: number
    status: number
    msg: number
    loginTime: number
    _all: number
  }


  export type SysLogininforAvgAggregateInputType = {
    infoId?: true
  }

  export type SysLogininforSumAggregateInputType = {
    infoId?: true
  }

  export type SysLogininforMinAggregateInputType = {
    infoId?: true
    userName?: true
    ipaddr?: true
    loginLocation?: true
    browser?: true
    os?: true
    status?: true
    msg?: true
    loginTime?: true
  }

  export type SysLogininforMaxAggregateInputType = {
    infoId?: true
    userName?: true
    ipaddr?: true
    loginLocation?: true
    browser?: true
    os?: true
    status?: true
    msg?: true
    loginTime?: true
  }

  export type SysLogininforCountAggregateInputType = {
    infoId?: true
    userName?: true
    ipaddr?: true
    loginLocation?: true
    browser?: true
    os?: true
    status?: true
    msg?: true
    loginTime?: true
    _all?: true
  }

  export type SysLogininforAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysLogininfor to aggregate.
     */
    where?: SysLogininforWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysLogininfors to fetch.
     */
    orderBy?: SysLogininforOrderByWithRelationInput | SysLogininforOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysLogininforWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysLogininfors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysLogininfors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysLogininfors
    **/
    _count?: true | SysLogininforCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysLogininforAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysLogininforSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysLogininforMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysLogininforMaxAggregateInputType
  }

  export type GetSysLogininforAggregateType<T extends SysLogininforAggregateArgs> = {
        [P in keyof T & keyof AggregateSysLogininfor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysLogininfor[P]>
      : GetScalarType<T[P], AggregateSysLogininfor[P]>
  }




  export type SysLogininforGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysLogininforWhereInput
    orderBy?: SysLogininforOrderByWithAggregationInput | SysLogininforOrderByWithAggregationInput[]
    by: SysLogininforScalarFieldEnum[] | SysLogininforScalarFieldEnum
    having?: SysLogininforScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysLogininforCountAggregateInputType | true
    _avg?: SysLogininforAvgAggregateInputType
    _sum?: SysLogininforSumAggregateInputType
    _min?: SysLogininforMinAggregateInputType
    _max?: SysLogininforMaxAggregateInputType
  }

  export type SysLogininforGroupByOutputType = {
    infoId: number
    userName: string | null
    ipaddr: string | null
    loginLocation: string | null
    browser: string | null
    os: string | null
    status: string | null
    msg: string | null
    loginTime: string | null
    _count: SysLogininforCountAggregateOutputType | null
    _avg: SysLogininforAvgAggregateOutputType | null
    _sum: SysLogininforSumAggregateOutputType | null
    _min: SysLogininforMinAggregateOutputType | null
    _max: SysLogininforMaxAggregateOutputType | null
  }

  type GetSysLogininforGroupByPayload<T extends SysLogininforGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysLogininforGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysLogininforGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysLogininforGroupByOutputType[P]>
            : GetScalarType<T[P], SysLogininforGroupByOutputType[P]>
        }
      >
    >


  export type SysLogininforSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    infoId?: boolean
    userName?: boolean
    ipaddr?: boolean
    loginLocation?: boolean
    browser?: boolean
    os?: boolean
    status?: boolean
    msg?: boolean
    loginTime?: boolean
  }, ExtArgs["result"]["sysLogininfor"]>


  export type SysLogininforSelectScalar = {
    infoId?: boolean
    userName?: boolean
    ipaddr?: boolean
    loginLocation?: boolean
    browser?: boolean
    os?: boolean
    status?: boolean
    msg?: boolean
    loginTime?: boolean
  }

  export type SysLogininforOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"infoId" | "userName" | "ipaddr" | "loginLocation" | "browser" | "os" | "status" | "msg" | "loginTime", ExtArgs["result"]["sysLogininfor"]>

  export type $SysLogininforPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysLogininfor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      infoId: number
      userName: string | null
      ipaddr: string | null
      loginLocation: string | null
      browser: string | null
      os: string | null
      status: string | null
      msg: string | null
      loginTime: string | null
    }, ExtArgs["result"]["sysLogininfor"]>
    composites: {}
  }

  type SysLogininforGetPayload<S extends boolean | null | undefined | SysLogininforDefaultArgs> = $Result.GetResult<Prisma.$SysLogininforPayload, S>

  type SysLogininforCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysLogininforFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysLogininforCountAggregateInputType | true
    }

  export interface SysLogininforDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysLogininfor'], meta: { name: 'SysLogininfor' } }
    /**
     * Find zero or one SysLogininfor that matches the filter.
     * @param {SysLogininforFindUniqueArgs} args - Arguments to find a SysLogininfor
     * @example
     * // Get one SysLogininfor
     * const sysLogininfor = await prisma.sysLogininfor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysLogininforFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysLogininforFindUniqueArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysLogininfor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysLogininforFindUniqueOrThrowArgs} args - Arguments to find a SysLogininfor
     * @example
     * // Get one SysLogininfor
     * const sysLogininfor = await prisma.sysLogininfor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysLogininforFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysLogininforFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysLogininfor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforFindFirstArgs} args - Arguments to find a SysLogininfor
     * @example
     * // Get one SysLogininfor
     * const sysLogininfor = await prisma.sysLogininfor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysLogininforFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysLogininforFindFirstArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysLogininfor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforFindFirstOrThrowArgs} args - Arguments to find a SysLogininfor
     * @example
     * // Get one SysLogininfor
     * const sysLogininfor = await prisma.sysLogininfor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysLogininforFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysLogininforFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysLogininfors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysLogininfors
     * const sysLogininfors = await prisma.sysLogininfor.findMany()
     * 
     * // Get first 10 SysLogininfors
     * const sysLogininfors = await prisma.sysLogininfor.findMany({ take: 10 })
     * 
     * // Only select the `infoId`
     * const sysLogininforWithInfoIdOnly = await prisma.sysLogininfor.findMany({ select: { infoId: true } })
     * 
    **/
    findMany<T extends SysLogininforFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysLogininforFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysLogininfor.
     * @param {SysLogininforCreateArgs} args - Arguments to create a SysLogininfor.
     * @example
     * // Create one SysLogininfor
     * const SysLogininfor = await prisma.sysLogininfor.create({
     *   data: {
     *     // ... data to create a SysLogininfor
     *   }
     * })
     * 
    **/
    create<T extends SysLogininforCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysLogininforCreateArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysLogininfors.
     * @param {SysLogininforCreateManyArgs} args - Arguments to create many SysLogininfors.
     * @example
     * // Create many SysLogininfors
     * const sysLogininfor = await prisma.sysLogininfor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysLogininforCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysLogininforCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysLogininfor.
     * @param {SysLogininforDeleteArgs} args - Arguments to delete one SysLogininfor.
     * @example
     * // Delete one SysLogininfor
     * const SysLogininfor = await prisma.sysLogininfor.delete({
     *   where: {
     *     // ... filter to delete one SysLogininfor
     *   }
     * })
     * 
    **/
    delete<T extends SysLogininforDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysLogininforDeleteArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysLogininfor.
     * @param {SysLogininforUpdateArgs} args - Arguments to update one SysLogininfor.
     * @example
     * // Update one SysLogininfor
     * const sysLogininfor = await prisma.sysLogininfor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysLogininforUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysLogininforUpdateArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysLogininfors.
     * @param {SysLogininforDeleteManyArgs} args - Arguments to filter SysLogininfors to delete.
     * @example
     * // Delete a few SysLogininfors
     * const { count } = await prisma.sysLogininfor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysLogininforDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysLogininforDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysLogininfors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysLogininfors
     * const sysLogininfor = await prisma.sysLogininfor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysLogininforUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysLogininforUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysLogininfor.
     * @param {SysLogininforUpsertArgs} args - Arguments to update or create a SysLogininfor.
     * @example
     * // Update or create a SysLogininfor
     * const sysLogininfor = await prisma.sysLogininfor.upsert({
     *   create: {
     *     // ... data to create a SysLogininfor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysLogininfor we want to update
     *   }
     * })
    **/
    upsert<T extends SysLogininforUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysLogininforUpsertArgs<ExtArgs>>
    ): Prisma__SysLogininforClient<$Result.GetResult<Prisma.$SysLogininforPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysLogininfors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforCountArgs} args - Arguments to filter SysLogininfors to count.
     * @example
     * // Count the number of SysLogininfors
     * const count = await prisma.sysLogininfor.count({
     *   where: {
     *     // ... the filter for the SysLogininfors we want to count
     *   }
     * })
    **/
    count<T extends SysLogininforCountArgs>(
      args?: Subset<T, SysLogininforCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysLogininforCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysLogininfor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysLogininforAggregateArgs>(args: Subset<T, SysLogininforAggregateArgs>): Prisma.PrismaPromise<GetSysLogininforAggregateType<T>>

    /**
     * Group by SysLogininfor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysLogininforGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysLogininforGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysLogininforGroupByArgs['orderBy'] }
        : { orderBy?: SysLogininforGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysLogininforGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysLogininforGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysLogininfor model
   */
  readonly fields: SysLogininforFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysLogininfor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysLogininforClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysLogininfor model
   */ 
  interface SysLogininforFieldRefs {
    readonly infoId: FieldRef<"SysLogininfor", 'Int'>
    readonly userName: FieldRef<"SysLogininfor", 'String'>
    readonly ipaddr: FieldRef<"SysLogininfor", 'String'>
    readonly loginLocation: FieldRef<"SysLogininfor", 'String'>
    readonly browser: FieldRef<"SysLogininfor", 'String'>
    readonly os: FieldRef<"SysLogininfor", 'String'>
    readonly status: FieldRef<"SysLogininfor", 'String'>
    readonly msg: FieldRef<"SysLogininfor", 'String'>
    readonly loginTime: FieldRef<"SysLogininfor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysLogininfor findUnique
   */
  export type SysLogininforFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * Filter, which SysLogininfor to fetch.
     */
    where: SysLogininforWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor findUniqueOrThrow
   */
  export type SysLogininforFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * Filter, which SysLogininfor to fetch.
     */
    where: SysLogininforWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor findFirst
   */
  export type SysLogininforFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * Filter, which SysLogininfor to fetch.
     */
    where?: SysLogininforWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysLogininfors to fetch.
     */
    orderBy?: SysLogininforOrderByWithRelationInput | SysLogininforOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysLogininfors.
     */
    cursor?: SysLogininforWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysLogininfors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysLogininfors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysLogininfors.
     */
    distinct?: SysLogininforScalarFieldEnum | SysLogininforScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor findFirstOrThrow
   */
  export type SysLogininforFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * Filter, which SysLogininfor to fetch.
     */
    where?: SysLogininforWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysLogininfors to fetch.
     */
    orderBy?: SysLogininforOrderByWithRelationInput | SysLogininforOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysLogininfors.
     */
    cursor?: SysLogininforWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysLogininfors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysLogininfors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysLogininfors.
     */
    distinct?: SysLogininforScalarFieldEnum | SysLogininforScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor findMany
   */
  export type SysLogininforFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * Filter, which SysLogininfors to fetch.
     */
    where?: SysLogininforWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysLogininfors to fetch.
     */
    orderBy?: SysLogininforOrderByWithRelationInput | SysLogininforOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysLogininfors.
     */
    cursor?: SysLogininforWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysLogininfors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysLogininfors.
     */
    skip?: number
    distinct?: SysLogininforScalarFieldEnum | SysLogininforScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor create
   */
  export type SysLogininforCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * The data needed to create a SysLogininfor.
     */
    data?: XOR<SysLogininforCreateInput, SysLogininforUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor createMany
   */
  export type SysLogininforCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysLogininfors.
     */
    data: SysLogininforCreateManyInput | SysLogininforCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysLogininfor update
   */
  export type SysLogininforUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * The data needed to update a SysLogininfor.
     */
    data: XOR<SysLogininforUpdateInput, SysLogininforUncheckedUpdateInput>
    /**
     * Choose, which SysLogininfor to update.
     */
    where: SysLogininforWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor updateMany
   */
  export type SysLogininforUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysLogininfors.
     */
    data: XOR<SysLogininforUpdateManyMutationInput, SysLogininforUncheckedUpdateManyInput>
    /**
     * Filter which SysLogininfors to update
     */
    where?: SysLogininforWhereInput
  }

  /**
   * SysLogininfor upsert
   */
  export type SysLogininforUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * The filter to search for the SysLogininfor to update in case it exists.
     */
    where: SysLogininforWhereUniqueInput
    /**
     * In case the SysLogininfor found by the `where` argument doesn't exist, create a new SysLogininfor with this data.
     */
    create: XOR<SysLogininforCreateInput, SysLogininforUncheckedCreateInput>
    /**
     * In case the SysLogininfor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysLogininforUpdateInput, SysLogininforUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor delete
   */
  export type SysLogininforDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
    /**
     * Filter which SysLogininfor to delete.
     */
    where: SysLogininforWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysLogininfor deleteMany
   */
  export type SysLogininforDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysLogininfors to delete
     */
    where?: SysLogininforWhereInput
  }

  /**
   * SysLogininfor without action
   */
  export type SysLogininforDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysLogininfor
     */
    select?: SysLogininforSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysLogininfor
     */
    omit?: SysLogininforOmit<ExtArgs> | null
  }


  /**
   * Model SysMenu
   */

  export type AggregateSysMenu = {
    _count: SysMenuCountAggregateOutputType | null
    _avg: SysMenuAvgAggregateOutputType | null
    _sum: SysMenuSumAggregateOutputType | null
    _min: SysMenuMinAggregateOutputType | null
    _max: SysMenuMaxAggregateOutputType | null
  }

  export type SysMenuAvgAggregateOutputType = {
    menuId: number | null
    parentId: number | null
    orderNum: number | null
    isFrame: number | null
    isCache: number | null
  }

  export type SysMenuSumAggregateOutputType = {
    menuId: number | null
    parentId: number | null
    orderNum: number | null
    isFrame: number | null
    isCache: number | null
  }

  export type SysMenuMinAggregateOutputType = {
    menuId: number | null
    menuName: string | null
    parentId: number | null
    orderNum: number | null
    path: string | null
    component: string | null
    query: string | null
    isFrame: number | null
    isCache: number | null
    menuType: string | null
    visible: string | null
    status: string | null
    perms: string | null
    icon: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysMenuMaxAggregateOutputType = {
    menuId: number | null
    menuName: string | null
    parentId: number | null
    orderNum: number | null
    path: string | null
    component: string | null
    query: string | null
    isFrame: number | null
    isCache: number | null
    menuType: string | null
    visible: string | null
    status: string | null
    perms: string | null
    icon: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysMenuCountAggregateOutputType = {
    menuId: number
    menuName: number
    parentId: number
    orderNum: number
    path: number
    component: number
    query: number
    isFrame: number
    isCache: number
    menuType: number
    visible: number
    status: number
    perms: number
    icon: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysMenuAvgAggregateInputType = {
    menuId?: true
    parentId?: true
    orderNum?: true
    isFrame?: true
    isCache?: true
  }

  export type SysMenuSumAggregateInputType = {
    menuId?: true
    parentId?: true
    orderNum?: true
    isFrame?: true
    isCache?: true
  }

  export type SysMenuMinAggregateInputType = {
    menuId?: true
    menuName?: true
    parentId?: true
    orderNum?: true
    path?: true
    component?: true
    query?: true
    isFrame?: true
    isCache?: true
    menuType?: true
    visible?: true
    status?: true
    perms?: true
    icon?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysMenuMaxAggregateInputType = {
    menuId?: true
    menuName?: true
    parentId?: true
    orderNum?: true
    path?: true
    component?: true
    query?: true
    isFrame?: true
    isCache?: true
    menuType?: true
    visible?: true
    status?: true
    perms?: true
    icon?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysMenuCountAggregateInputType = {
    menuId?: true
    menuName?: true
    parentId?: true
    orderNum?: true
    path?: true
    component?: true
    query?: true
    isFrame?: true
    isCache?: true
    menuType?: true
    visible?: true
    status?: true
    perms?: true
    icon?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysMenu to aggregate.
     */
    where?: SysMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysMenus to fetch.
     */
    orderBy?: SysMenuOrderByWithRelationInput | SysMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysMenus
    **/
    _count?: true | SysMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysMenuMaxAggregateInputType
  }

  export type GetSysMenuAggregateType<T extends SysMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateSysMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysMenu[P]>
      : GetScalarType<T[P], AggregateSysMenu[P]>
  }




  export type SysMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysMenuWhereInput
    orderBy?: SysMenuOrderByWithAggregationInput | SysMenuOrderByWithAggregationInput[]
    by: SysMenuScalarFieldEnum[] | SysMenuScalarFieldEnum
    having?: SysMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysMenuCountAggregateInputType | true
    _avg?: SysMenuAvgAggregateInputType
    _sum?: SysMenuSumAggregateInputType
    _min?: SysMenuMinAggregateInputType
    _max?: SysMenuMaxAggregateInputType
  }

  export type SysMenuGroupByOutputType = {
    menuId: number
    menuName: string
    parentId: number | null
    orderNum: number | null
    path: string | null
    component: string | null
    query: string | null
    isFrame: number | null
    isCache: number | null
    menuType: string | null
    visible: string | null
    status: string | null
    perms: string | null
    icon: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysMenuCountAggregateOutputType | null
    _avg: SysMenuAvgAggregateOutputType | null
    _sum: SysMenuSumAggregateOutputType | null
    _min: SysMenuMinAggregateOutputType | null
    _max: SysMenuMaxAggregateOutputType | null
  }

  type GetSysMenuGroupByPayload<T extends SysMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysMenuGroupByOutputType[P]>
            : GetScalarType<T[P], SysMenuGroupByOutputType[P]>
        }
      >
    >


  export type SysMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    menuName?: boolean
    parentId?: boolean
    orderNum?: boolean
    path?: boolean
    component?: boolean
    query?: boolean
    isFrame?: boolean
    isCache?: boolean
    menuType?: boolean
    visible?: boolean
    status?: boolean
    perms?: boolean
    icon?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    roles?: boolean | SysMenu$rolesArgs<ExtArgs>
    _count?: boolean | SysMenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysMenu"]>


  export type SysMenuSelectScalar = {
    menuId?: boolean
    menuName?: boolean
    parentId?: boolean
    orderNum?: boolean
    path?: boolean
    component?: boolean
    query?: boolean
    isFrame?: boolean
    isCache?: boolean
    menuType?: boolean
    visible?: boolean
    status?: boolean
    perms?: boolean
    icon?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menuId" | "menuName" | "parentId" | "orderNum" | "path" | "component" | "query" | "isFrame" | "isCache" | "menuType" | "visible" | "status" | "perms" | "icon" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysMenu"]>
  export type SysMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | SysMenu$rolesArgs<ExtArgs>
    _count?: boolean | SysMenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SysMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysMenu"
    objects: {
      roles: Prisma.$SysRoleMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      menuId: number
      menuName: string
      parentId: number | null
      orderNum: number | null
      path: string | null
      component: string | null
      query: string | null
      isFrame: number | null
      isCache: number | null
      menuType: string | null
      visible: string | null
      status: string | null
      perms: string | null
      icon: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysMenu"]>
    composites: {}
  }

  type SysMenuGetPayload<S extends boolean | null | undefined | SysMenuDefaultArgs> = $Result.GetResult<Prisma.$SysMenuPayload, S>

  type SysMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysMenuCountAggregateInputType | true
    }

  export interface SysMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysMenu'], meta: { name: 'SysMenu' } }
    /**
     * Find zero or one SysMenu that matches the filter.
     * @param {SysMenuFindUniqueArgs} args - Arguments to find a SysMenu
     * @example
     * // Get one SysMenu
     * const sysMenu = await prisma.sysMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysMenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysMenuFindUniqueArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysMenu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysMenuFindUniqueOrThrowArgs} args - Arguments to find a SysMenu
     * @example
     * // Get one SysMenu
     * const sysMenu = await prisma.sysMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysMenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysMenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuFindFirstArgs} args - Arguments to find a SysMenu
     * @example
     * // Get one SysMenu
     * const sysMenu = await prisma.sysMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysMenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysMenuFindFirstArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuFindFirstOrThrowArgs} args - Arguments to find a SysMenu
     * @example
     * // Get one SysMenu
     * const sysMenu = await prisma.sysMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysMenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysMenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysMenus
     * const sysMenus = await prisma.sysMenu.findMany()
     * 
     * // Get first 10 SysMenus
     * const sysMenus = await prisma.sysMenu.findMany({ take: 10 })
     * 
     * // Only select the `menuId`
     * const sysMenuWithMenuIdOnly = await prisma.sysMenu.findMany({ select: { menuId: true } })
     * 
    **/
    findMany<T extends SysMenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysMenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysMenu.
     * @param {SysMenuCreateArgs} args - Arguments to create a SysMenu.
     * @example
     * // Create one SysMenu
     * const SysMenu = await prisma.sysMenu.create({
     *   data: {
     *     // ... data to create a SysMenu
     *   }
     * })
     * 
    **/
    create<T extends SysMenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysMenuCreateArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysMenus.
     * @param {SysMenuCreateManyArgs} args - Arguments to create many SysMenus.
     * @example
     * // Create many SysMenus
     * const sysMenu = await prisma.sysMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysMenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysMenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysMenu.
     * @param {SysMenuDeleteArgs} args - Arguments to delete one SysMenu.
     * @example
     * // Delete one SysMenu
     * const SysMenu = await prisma.sysMenu.delete({
     *   where: {
     *     // ... filter to delete one SysMenu
     *   }
     * })
     * 
    **/
    delete<T extends SysMenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysMenuDeleteArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysMenu.
     * @param {SysMenuUpdateArgs} args - Arguments to update one SysMenu.
     * @example
     * // Update one SysMenu
     * const sysMenu = await prisma.sysMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysMenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysMenuUpdateArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysMenus.
     * @param {SysMenuDeleteManyArgs} args - Arguments to filter SysMenus to delete.
     * @example
     * // Delete a few SysMenus
     * const { count } = await prisma.sysMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysMenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysMenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysMenus
     * const sysMenu = await prisma.sysMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysMenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysMenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysMenu.
     * @param {SysMenuUpsertArgs} args - Arguments to update or create a SysMenu.
     * @example
     * // Update or create a SysMenu
     * const sysMenu = await prisma.sysMenu.upsert({
     *   create: {
     *     // ... data to create a SysMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysMenu we want to update
     *   }
     * })
    **/
    upsert<T extends SysMenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysMenuUpsertArgs<ExtArgs>>
    ): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuCountArgs} args - Arguments to filter SysMenus to count.
     * @example
     * // Count the number of SysMenus
     * const count = await prisma.sysMenu.count({
     *   where: {
     *     // ... the filter for the SysMenus we want to count
     *   }
     * })
    **/
    count<T extends SysMenuCountArgs>(
      args?: Subset<T, SysMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysMenuAggregateArgs>(args: Subset<T, SysMenuAggregateArgs>): Prisma.PrismaPromise<GetSysMenuAggregateType<T>>

    /**
     * Group by SysMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysMenuGroupByArgs['orderBy'] }
        : { orderBy?: SysMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysMenu model
   */
  readonly fields: SysMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends SysMenu$rolesArgs<ExtArgs> = {}>(args?: Subset<T, SysMenu$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysMenu model
   */ 
  interface SysMenuFieldRefs {
    readonly menuId: FieldRef<"SysMenu", 'Int'>
    readonly menuName: FieldRef<"SysMenu", 'String'>
    readonly parentId: FieldRef<"SysMenu", 'Int'>
    readonly orderNum: FieldRef<"SysMenu", 'Int'>
    readonly path: FieldRef<"SysMenu", 'String'>
    readonly component: FieldRef<"SysMenu", 'String'>
    readonly query: FieldRef<"SysMenu", 'String'>
    readonly isFrame: FieldRef<"SysMenu", 'Int'>
    readonly isCache: FieldRef<"SysMenu", 'Int'>
    readonly menuType: FieldRef<"SysMenu", 'String'>
    readonly visible: FieldRef<"SysMenu", 'String'>
    readonly status: FieldRef<"SysMenu", 'String'>
    readonly perms: FieldRef<"SysMenu", 'String'>
    readonly icon: FieldRef<"SysMenu", 'String'>
    readonly createBy: FieldRef<"SysMenu", 'String'>
    readonly createTime: FieldRef<"SysMenu", 'String'>
    readonly updateBy: FieldRef<"SysMenu", 'String'>
    readonly updateTime: FieldRef<"SysMenu", 'String'>
    readonly remark: FieldRef<"SysMenu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysMenu findUnique
   */
  export type SysMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysMenu to fetch.
     */
    where: SysMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu findUniqueOrThrow
   */
  export type SysMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysMenu to fetch.
     */
    where: SysMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu findFirst
   */
  export type SysMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysMenu to fetch.
     */
    where?: SysMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysMenus to fetch.
     */
    orderBy?: SysMenuOrderByWithRelationInput | SysMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysMenus.
     */
    cursor?: SysMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysMenus.
     */
    distinct?: SysMenuScalarFieldEnum | SysMenuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu findFirstOrThrow
   */
  export type SysMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysMenu to fetch.
     */
    where?: SysMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysMenus to fetch.
     */
    orderBy?: SysMenuOrderByWithRelationInput | SysMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysMenus.
     */
    cursor?: SysMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysMenus.
     */
    distinct?: SysMenuScalarFieldEnum | SysMenuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu findMany
   */
  export type SysMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysMenus to fetch.
     */
    where?: SysMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysMenus to fetch.
     */
    orderBy?: SysMenuOrderByWithRelationInput | SysMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysMenus.
     */
    cursor?: SysMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysMenus.
     */
    skip?: number
    distinct?: SysMenuScalarFieldEnum | SysMenuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu create
   */
  export type SysMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a SysMenu.
     */
    data: XOR<SysMenuCreateInput, SysMenuUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu createMany
   */
  export type SysMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysMenus.
     */
    data: SysMenuCreateManyInput | SysMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysMenu update
   */
  export type SysMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a SysMenu.
     */
    data: XOR<SysMenuUpdateInput, SysMenuUncheckedUpdateInput>
    /**
     * Choose, which SysMenu to update.
     */
    where: SysMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu updateMany
   */
  export type SysMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysMenus.
     */
    data: XOR<SysMenuUpdateManyMutationInput, SysMenuUncheckedUpdateManyInput>
    /**
     * Filter which SysMenus to update
     */
    where?: SysMenuWhereInput
  }

  /**
   * SysMenu upsert
   */
  export type SysMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the SysMenu to update in case it exists.
     */
    where: SysMenuWhereUniqueInput
    /**
     * In case the SysMenu found by the `where` argument doesn't exist, create a new SysMenu with this data.
     */
    create: XOR<SysMenuCreateInput, SysMenuUncheckedCreateInput>
    /**
     * In case the SysMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysMenuUpdateInput, SysMenuUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu delete
   */
  export type SysMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
    /**
     * Filter which SysMenu to delete.
     */
    where: SysMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysMenu deleteMany
   */
  export type SysMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysMenus to delete
     */
    where?: SysMenuWhereInput
  }

  /**
   * SysMenu.roles
   */
  export type SysMenu$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    where?: SysRoleMenuWhereInput
    orderBy?: SysRoleMenuOrderByWithRelationInput | SysRoleMenuOrderByWithRelationInput[]
    cursor?: SysRoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysRoleMenuScalarFieldEnum | SysRoleMenuScalarFieldEnum[]
  }

  /**
   * SysMenu without action
   */
  export type SysMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysMenu
     */
    select?: SysMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysMenu
     */
    omit?: SysMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysMenuInclude<ExtArgs> | null
  }


  /**
   * Model SysNotice
   */

  export type AggregateSysNotice = {
    _count: SysNoticeCountAggregateOutputType | null
    _avg: SysNoticeAvgAggregateOutputType | null
    _sum: SysNoticeSumAggregateOutputType | null
    _min: SysNoticeMinAggregateOutputType | null
    _max: SysNoticeMaxAggregateOutputType | null
  }

  export type SysNoticeAvgAggregateOutputType = {
    noticeId: number | null
  }

  export type SysNoticeSumAggregateOutputType = {
    noticeId: number | null
  }

  export type SysNoticeMinAggregateOutputType = {
    noticeId: number | null
    noticeTitle: string | null
    noticeType: string | null
    noticeContent: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysNoticeMaxAggregateOutputType = {
    noticeId: number | null
    noticeTitle: string | null
    noticeType: string | null
    noticeContent: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysNoticeCountAggregateOutputType = {
    noticeId: number
    noticeTitle: number
    noticeType: number
    noticeContent: number
    status: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysNoticeAvgAggregateInputType = {
    noticeId?: true
  }

  export type SysNoticeSumAggregateInputType = {
    noticeId?: true
  }

  export type SysNoticeMinAggregateInputType = {
    noticeId?: true
    noticeTitle?: true
    noticeType?: true
    noticeContent?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysNoticeMaxAggregateInputType = {
    noticeId?: true
    noticeTitle?: true
    noticeType?: true
    noticeContent?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysNoticeCountAggregateInputType = {
    noticeId?: true
    noticeTitle?: true
    noticeType?: true
    noticeContent?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysNoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysNotice to aggregate.
     */
    where?: SysNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysNotices to fetch.
     */
    orderBy?: SysNoticeOrderByWithRelationInput | SysNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysNotices
    **/
    _count?: true | SysNoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysNoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysNoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysNoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysNoticeMaxAggregateInputType
  }

  export type GetSysNoticeAggregateType<T extends SysNoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateSysNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysNotice[P]>
      : GetScalarType<T[P], AggregateSysNotice[P]>
  }




  export type SysNoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysNoticeWhereInput
    orderBy?: SysNoticeOrderByWithAggregationInput | SysNoticeOrderByWithAggregationInput[]
    by: SysNoticeScalarFieldEnum[] | SysNoticeScalarFieldEnum
    having?: SysNoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysNoticeCountAggregateInputType | true
    _avg?: SysNoticeAvgAggregateInputType
    _sum?: SysNoticeSumAggregateInputType
    _min?: SysNoticeMinAggregateInputType
    _max?: SysNoticeMaxAggregateInputType
  }

  export type SysNoticeGroupByOutputType = {
    noticeId: number
    noticeTitle: string
    noticeType: string
    noticeContent: string | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysNoticeCountAggregateOutputType | null
    _avg: SysNoticeAvgAggregateOutputType | null
    _sum: SysNoticeSumAggregateOutputType | null
    _min: SysNoticeMinAggregateOutputType | null
    _max: SysNoticeMaxAggregateOutputType | null
  }

  type GetSysNoticeGroupByPayload<T extends SysNoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysNoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysNoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysNoticeGroupByOutputType[P]>
            : GetScalarType<T[P], SysNoticeGroupByOutputType[P]>
        }
      >
    >


  export type SysNoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noticeId?: boolean
    noticeTitle?: boolean
    noticeType?: boolean
    noticeContent?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }, ExtArgs["result"]["sysNotice"]>


  export type SysNoticeSelectScalar = {
    noticeId?: boolean
    noticeTitle?: boolean
    noticeType?: boolean
    noticeContent?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysNoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"noticeId" | "noticeTitle" | "noticeType" | "noticeContent" | "status" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysNotice"]>

  export type $SysNoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysNotice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      noticeId: number
      noticeTitle: string
      noticeType: string
      noticeContent: string | null
      status: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysNotice"]>
    composites: {}
  }

  type SysNoticeGetPayload<S extends boolean | null | undefined | SysNoticeDefaultArgs> = $Result.GetResult<Prisma.$SysNoticePayload, S>

  type SysNoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysNoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysNoticeCountAggregateInputType | true
    }

  export interface SysNoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysNotice'], meta: { name: 'SysNotice' } }
    /**
     * Find zero or one SysNotice that matches the filter.
     * @param {SysNoticeFindUniqueArgs} args - Arguments to find a SysNotice
     * @example
     * // Get one SysNotice
     * const sysNotice = await prisma.sysNotice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysNoticeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysNoticeFindUniqueArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysNotice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysNoticeFindUniqueOrThrowArgs} args - Arguments to find a SysNotice
     * @example
     * // Get one SysNotice
     * const sysNotice = await prisma.sysNotice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysNoticeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysNoticeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysNotice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeFindFirstArgs} args - Arguments to find a SysNotice
     * @example
     * // Get one SysNotice
     * const sysNotice = await prisma.sysNotice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysNoticeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysNoticeFindFirstArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysNotice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeFindFirstOrThrowArgs} args - Arguments to find a SysNotice
     * @example
     * // Get one SysNotice
     * const sysNotice = await prisma.sysNotice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysNoticeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysNoticeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysNotices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysNotices
     * const sysNotices = await prisma.sysNotice.findMany()
     * 
     * // Get first 10 SysNotices
     * const sysNotices = await prisma.sysNotice.findMany({ take: 10 })
     * 
     * // Only select the `noticeId`
     * const sysNoticeWithNoticeIdOnly = await prisma.sysNotice.findMany({ select: { noticeId: true } })
     * 
    **/
    findMany<T extends SysNoticeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysNoticeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysNotice.
     * @param {SysNoticeCreateArgs} args - Arguments to create a SysNotice.
     * @example
     * // Create one SysNotice
     * const SysNotice = await prisma.sysNotice.create({
     *   data: {
     *     // ... data to create a SysNotice
     *   }
     * })
     * 
    **/
    create<T extends SysNoticeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysNoticeCreateArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysNotices.
     * @param {SysNoticeCreateManyArgs} args - Arguments to create many SysNotices.
     * @example
     * // Create many SysNotices
     * const sysNotice = await prisma.sysNotice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysNoticeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysNoticeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysNotice.
     * @param {SysNoticeDeleteArgs} args - Arguments to delete one SysNotice.
     * @example
     * // Delete one SysNotice
     * const SysNotice = await prisma.sysNotice.delete({
     *   where: {
     *     // ... filter to delete one SysNotice
     *   }
     * })
     * 
    **/
    delete<T extends SysNoticeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysNoticeDeleteArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysNotice.
     * @param {SysNoticeUpdateArgs} args - Arguments to update one SysNotice.
     * @example
     * // Update one SysNotice
     * const sysNotice = await prisma.sysNotice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysNoticeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysNoticeUpdateArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysNotices.
     * @param {SysNoticeDeleteManyArgs} args - Arguments to filter SysNotices to delete.
     * @example
     * // Delete a few SysNotices
     * const { count } = await prisma.sysNotice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysNoticeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysNoticeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysNotices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysNotices
     * const sysNotice = await prisma.sysNotice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysNoticeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysNoticeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysNotice.
     * @param {SysNoticeUpsertArgs} args - Arguments to update or create a SysNotice.
     * @example
     * // Update or create a SysNotice
     * const sysNotice = await prisma.sysNotice.upsert({
     *   create: {
     *     // ... data to create a SysNotice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysNotice we want to update
     *   }
     * })
    **/
    upsert<T extends SysNoticeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysNoticeUpsertArgs<ExtArgs>>
    ): Prisma__SysNoticeClient<$Result.GetResult<Prisma.$SysNoticePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysNotices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeCountArgs} args - Arguments to filter SysNotices to count.
     * @example
     * // Count the number of SysNotices
     * const count = await prisma.sysNotice.count({
     *   where: {
     *     // ... the filter for the SysNotices we want to count
     *   }
     * })
    **/
    count<T extends SysNoticeCountArgs>(
      args?: Subset<T, SysNoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysNoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysNotice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysNoticeAggregateArgs>(args: Subset<T, SysNoticeAggregateArgs>): Prisma.PrismaPromise<GetSysNoticeAggregateType<T>>

    /**
     * Group by SysNotice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysNoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysNoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysNoticeGroupByArgs['orderBy'] }
        : { orderBy?: SysNoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysNoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysNotice model
   */
  readonly fields: SysNoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysNotice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysNoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysNotice model
   */ 
  interface SysNoticeFieldRefs {
    readonly noticeId: FieldRef<"SysNotice", 'Int'>
    readonly noticeTitle: FieldRef<"SysNotice", 'String'>
    readonly noticeType: FieldRef<"SysNotice", 'String'>
    readonly noticeContent: FieldRef<"SysNotice", 'String'>
    readonly status: FieldRef<"SysNotice", 'String'>
    readonly createBy: FieldRef<"SysNotice", 'String'>
    readonly createTime: FieldRef<"SysNotice", 'String'>
    readonly updateBy: FieldRef<"SysNotice", 'String'>
    readonly updateTime: FieldRef<"SysNotice", 'String'>
    readonly remark: FieldRef<"SysNotice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysNotice findUnique
   */
  export type SysNoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SysNotice to fetch.
     */
    where: SysNoticeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice findUniqueOrThrow
   */
  export type SysNoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SysNotice to fetch.
     */
    where: SysNoticeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice findFirst
   */
  export type SysNoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SysNotice to fetch.
     */
    where?: SysNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysNotices to fetch.
     */
    orderBy?: SysNoticeOrderByWithRelationInput | SysNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysNotices.
     */
    cursor?: SysNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysNotices.
     */
    distinct?: SysNoticeScalarFieldEnum | SysNoticeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice findFirstOrThrow
   */
  export type SysNoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SysNotice to fetch.
     */
    where?: SysNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysNotices to fetch.
     */
    orderBy?: SysNoticeOrderByWithRelationInput | SysNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysNotices.
     */
    cursor?: SysNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysNotices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysNotices.
     */
    distinct?: SysNoticeScalarFieldEnum | SysNoticeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice findMany
   */
  export type SysNoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * Filter, which SysNotices to fetch.
     */
    where?: SysNoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysNotices to fetch.
     */
    orderBy?: SysNoticeOrderByWithRelationInput | SysNoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysNotices.
     */
    cursor?: SysNoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysNotices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysNotices.
     */
    skip?: number
    distinct?: SysNoticeScalarFieldEnum | SysNoticeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice create
   */
  export type SysNoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * The data needed to create a SysNotice.
     */
    data: XOR<SysNoticeCreateInput, SysNoticeUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice createMany
   */
  export type SysNoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysNotices.
     */
    data: SysNoticeCreateManyInput | SysNoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysNotice update
   */
  export type SysNoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * The data needed to update a SysNotice.
     */
    data: XOR<SysNoticeUpdateInput, SysNoticeUncheckedUpdateInput>
    /**
     * Choose, which SysNotice to update.
     */
    where: SysNoticeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice updateMany
   */
  export type SysNoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysNotices.
     */
    data: XOR<SysNoticeUpdateManyMutationInput, SysNoticeUncheckedUpdateManyInput>
    /**
     * Filter which SysNotices to update
     */
    where?: SysNoticeWhereInput
  }

  /**
   * SysNotice upsert
   */
  export type SysNoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * The filter to search for the SysNotice to update in case it exists.
     */
    where: SysNoticeWhereUniqueInput
    /**
     * In case the SysNotice found by the `where` argument doesn't exist, create a new SysNotice with this data.
     */
    create: XOR<SysNoticeCreateInput, SysNoticeUncheckedCreateInput>
    /**
     * In case the SysNotice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysNoticeUpdateInput, SysNoticeUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice delete
   */
  export type SysNoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
    /**
     * Filter which SysNotice to delete.
     */
    where: SysNoticeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysNotice deleteMany
   */
  export type SysNoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysNotices to delete
     */
    where?: SysNoticeWhereInput
  }

  /**
   * SysNotice without action
   */
  export type SysNoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysNotice
     */
    select?: SysNoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysNotice
     */
    omit?: SysNoticeOmit<ExtArgs> | null
  }


  /**
   * Model SysPost
   */

  export type AggregateSysPost = {
    _count: SysPostCountAggregateOutputType | null
    _avg: SysPostAvgAggregateOutputType | null
    _sum: SysPostSumAggregateOutputType | null
    _min: SysPostMinAggregateOutputType | null
    _max: SysPostMaxAggregateOutputType | null
  }

  export type SysPostAvgAggregateOutputType = {
    postId: number | null
    postSort: number | null
  }

  export type SysPostSumAggregateOutputType = {
    postId: number | null
    postSort: number | null
  }

  export type SysPostMinAggregateOutputType = {
    postId: number | null
    postCode: string | null
    postName: string | null
    postSort: number | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysPostMaxAggregateOutputType = {
    postId: number | null
    postCode: string | null
    postName: string | null
    postSort: number | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysPostCountAggregateOutputType = {
    postId: number
    postCode: number
    postName: number
    postSort: number
    status: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysPostAvgAggregateInputType = {
    postId?: true
    postSort?: true
  }

  export type SysPostSumAggregateInputType = {
    postId?: true
    postSort?: true
  }

  export type SysPostMinAggregateInputType = {
    postId?: true
    postCode?: true
    postName?: true
    postSort?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysPostMaxAggregateInputType = {
    postId?: true
    postCode?: true
    postName?: true
    postSort?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysPostCountAggregateInputType = {
    postId?: true
    postCode?: true
    postName?: true
    postSort?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysPost to aggregate.
     */
    where?: SysPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysPosts to fetch.
     */
    orderBy?: SysPostOrderByWithRelationInput | SysPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysPosts
    **/
    _count?: true | SysPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysPostMaxAggregateInputType
  }

  export type GetSysPostAggregateType<T extends SysPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSysPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysPost[P]>
      : GetScalarType<T[P], AggregateSysPost[P]>
  }




  export type SysPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysPostWhereInput
    orderBy?: SysPostOrderByWithAggregationInput | SysPostOrderByWithAggregationInput[]
    by: SysPostScalarFieldEnum[] | SysPostScalarFieldEnum
    having?: SysPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysPostCountAggregateInputType | true
    _avg?: SysPostAvgAggregateInputType
    _sum?: SysPostSumAggregateInputType
    _min?: SysPostMinAggregateInputType
    _max?: SysPostMaxAggregateInputType
  }

  export type SysPostGroupByOutputType = {
    postId: number
    postCode: string
    postName: string
    postSort: number
    status: string
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysPostCountAggregateOutputType | null
    _avg: SysPostAvgAggregateOutputType | null
    _sum: SysPostSumAggregateOutputType | null
    _min: SysPostMinAggregateOutputType | null
    _max: SysPostMaxAggregateOutputType | null
  }

  type GetSysPostGroupByPayload<T extends SysPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysPostGroupByOutputType[P]>
            : GetScalarType<T[P], SysPostGroupByOutputType[P]>
        }
      >
    >


  export type SysPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    postCode?: boolean
    postName?: boolean
    postSort?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    users?: boolean | SysPost$usersArgs<ExtArgs>
    _count?: boolean | SysPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysPost"]>


  export type SysPostSelectScalar = {
    postId?: boolean
    postCode?: boolean
    postName?: boolean
    postSort?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "postCode" | "postName" | "postSort" | "status" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysPost"]>
  export type SysPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SysPost$usersArgs<ExtArgs>
    _count?: boolean | SysPostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SysPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysPost"
    objects: {
      users: Prisma.$SysUserPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: number
      postCode: string
      postName: string
      postSort: number
      status: string
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysPost"]>
    composites: {}
  }

  type SysPostGetPayload<S extends boolean | null | undefined | SysPostDefaultArgs> = $Result.GetResult<Prisma.$SysPostPayload, S>

  type SysPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysPostCountAggregateInputType | true
    }

  export interface SysPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysPost'], meta: { name: 'SysPost' } }
    /**
     * Find zero or one SysPost that matches the filter.
     * @param {SysPostFindUniqueArgs} args - Arguments to find a SysPost
     * @example
     * // Get one SysPost
     * const sysPost = await prisma.sysPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysPostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysPostFindUniqueArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysPostFindUniqueOrThrowArgs} args - Arguments to find a SysPost
     * @example
     * // Get one SysPost
     * const sysPost = await prisma.sysPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysPostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostFindFirstArgs} args - Arguments to find a SysPost
     * @example
     * // Get one SysPost
     * const sysPost = await prisma.sysPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysPostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysPostFindFirstArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostFindFirstOrThrowArgs} args - Arguments to find a SysPost
     * @example
     * // Get one SysPost
     * const sysPost = await prisma.sysPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysPostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysPosts
     * const sysPosts = await prisma.sysPost.findMany()
     * 
     * // Get first 10 SysPosts
     * const sysPosts = await prisma.sysPost.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const sysPostWithPostIdOnly = await prisma.sysPost.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends SysPostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysPost.
     * @param {SysPostCreateArgs} args - Arguments to create a SysPost.
     * @example
     * // Create one SysPost
     * const SysPost = await prisma.sysPost.create({
     *   data: {
     *     // ... data to create a SysPost
     *   }
     * })
     * 
    **/
    create<T extends SysPostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysPostCreateArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysPosts.
     * @param {SysPostCreateManyArgs} args - Arguments to create many SysPosts.
     * @example
     * // Create many SysPosts
     * const sysPost = await prisma.sysPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysPostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysPost.
     * @param {SysPostDeleteArgs} args - Arguments to delete one SysPost.
     * @example
     * // Delete one SysPost
     * const SysPost = await prisma.sysPost.delete({
     *   where: {
     *     // ... filter to delete one SysPost
     *   }
     * })
     * 
    **/
    delete<T extends SysPostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysPostDeleteArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysPost.
     * @param {SysPostUpdateArgs} args - Arguments to update one SysPost.
     * @example
     * // Update one SysPost
     * const sysPost = await prisma.sysPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysPostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysPostUpdateArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysPosts.
     * @param {SysPostDeleteManyArgs} args - Arguments to filter SysPosts to delete.
     * @example
     * // Delete a few SysPosts
     * const { count } = await prisma.sysPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysPostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysPosts
     * const sysPost = await prisma.sysPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysPostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysPost.
     * @param {SysPostUpsertArgs} args - Arguments to update or create a SysPost.
     * @example
     * // Update or create a SysPost
     * const sysPost = await prisma.sysPost.upsert({
     *   create: {
     *     // ... data to create a SysPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysPost we want to update
     *   }
     * })
    **/
    upsert<T extends SysPostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysPostUpsertArgs<ExtArgs>>
    ): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostCountArgs} args - Arguments to filter SysPosts to count.
     * @example
     * // Count the number of SysPosts
     * const count = await prisma.sysPost.count({
     *   where: {
     *     // ... the filter for the SysPosts we want to count
     *   }
     * })
    **/
    count<T extends SysPostCountArgs>(
      args?: Subset<T, SysPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysPostAggregateArgs>(args: Subset<T, SysPostAggregateArgs>): Prisma.PrismaPromise<GetSysPostAggregateType<T>>

    /**
     * Group by SysPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysPostGroupByArgs['orderBy'] }
        : { orderBy?: SysPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysPost model
   */
  readonly fields: SysPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends SysPost$usersArgs<ExtArgs> = {}>(args?: Subset<T, SysPost$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysPost model
   */ 
  interface SysPostFieldRefs {
    readonly postId: FieldRef<"SysPost", 'Int'>
    readonly postCode: FieldRef<"SysPost", 'String'>
    readonly postName: FieldRef<"SysPost", 'String'>
    readonly postSort: FieldRef<"SysPost", 'Int'>
    readonly status: FieldRef<"SysPost", 'String'>
    readonly createBy: FieldRef<"SysPost", 'String'>
    readonly createTime: FieldRef<"SysPost", 'String'>
    readonly updateBy: FieldRef<"SysPost", 'String'>
    readonly updateTime: FieldRef<"SysPost", 'String'>
    readonly remark: FieldRef<"SysPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysPost findUnique
   */
  export type SysPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * Filter, which SysPost to fetch.
     */
    where: SysPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost findUniqueOrThrow
   */
  export type SysPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * Filter, which SysPost to fetch.
     */
    where: SysPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost findFirst
   */
  export type SysPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * Filter, which SysPost to fetch.
     */
    where?: SysPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysPosts to fetch.
     */
    orderBy?: SysPostOrderByWithRelationInput | SysPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysPosts.
     */
    cursor?: SysPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysPosts.
     */
    distinct?: SysPostScalarFieldEnum | SysPostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost findFirstOrThrow
   */
  export type SysPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * Filter, which SysPost to fetch.
     */
    where?: SysPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysPosts to fetch.
     */
    orderBy?: SysPostOrderByWithRelationInput | SysPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysPosts.
     */
    cursor?: SysPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysPosts.
     */
    distinct?: SysPostScalarFieldEnum | SysPostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost findMany
   */
  export type SysPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * Filter, which SysPosts to fetch.
     */
    where?: SysPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysPosts to fetch.
     */
    orderBy?: SysPostOrderByWithRelationInput | SysPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysPosts.
     */
    cursor?: SysPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysPosts.
     */
    skip?: number
    distinct?: SysPostScalarFieldEnum | SysPostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost create
   */
  export type SysPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SysPost.
     */
    data: XOR<SysPostCreateInput, SysPostUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost createMany
   */
  export type SysPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysPosts.
     */
    data: SysPostCreateManyInput | SysPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysPost update
   */
  export type SysPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SysPost.
     */
    data: XOR<SysPostUpdateInput, SysPostUncheckedUpdateInput>
    /**
     * Choose, which SysPost to update.
     */
    where: SysPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost updateMany
   */
  export type SysPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysPosts.
     */
    data: XOR<SysPostUpdateManyMutationInput, SysPostUncheckedUpdateManyInput>
    /**
     * Filter which SysPosts to update
     */
    where?: SysPostWhereInput
  }

  /**
   * SysPost upsert
   */
  export type SysPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SysPost to update in case it exists.
     */
    where: SysPostWhereUniqueInput
    /**
     * In case the SysPost found by the `where` argument doesn't exist, create a new SysPost with this data.
     */
    create: XOR<SysPostCreateInput, SysPostUncheckedCreateInput>
    /**
     * In case the SysPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysPostUpdateInput, SysPostUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost delete
   */
  export type SysPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
    /**
     * Filter which SysPost to delete.
     */
    where: SysPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysPost deleteMany
   */
  export type SysPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysPosts to delete
     */
    where?: SysPostWhereInput
  }

  /**
   * SysPost.users
   */
  export type SysPost$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    where?: SysUserPostWhereInput
    orderBy?: SysUserPostOrderByWithRelationInput | SysUserPostOrderByWithRelationInput[]
    cursor?: SysUserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysUserPostScalarFieldEnum | SysUserPostScalarFieldEnum[]
  }

  /**
   * SysPost without action
   */
  export type SysPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysPost
     */
    select?: SysPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysPost
     */
    omit?: SysPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysPostInclude<ExtArgs> | null
  }


  /**
   * Model SysUserPost
   */

  export type AggregateSysUserPost = {
    _count: SysUserPostCountAggregateOutputType | null
    _avg: SysUserPostAvgAggregateOutputType | null
    _sum: SysUserPostSumAggregateOutputType | null
    _min: SysUserPostMinAggregateOutputType | null
    _max: SysUserPostMaxAggregateOutputType | null
  }

  export type SysUserPostAvgAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SysUserPostSumAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SysUserPostMinAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SysUserPostMaxAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SysUserPostCountAggregateOutputType = {
    userId: number
    postId: number
    _all: number
  }


  export type SysUserPostAvgAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SysUserPostSumAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SysUserPostMinAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SysUserPostMaxAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SysUserPostCountAggregateInputType = {
    userId?: true
    postId?: true
    _all?: true
  }

  export type SysUserPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysUserPost to aggregate.
     */
    where?: SysUserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserPosts to fetch.
     */
    orderBy?: SysUserPostOrderByWithRelationInput | SysUserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysUserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysUserPosts
    **/
    _count?: true | SysUserPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysUserPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysUserPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysUserPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysUserPostMaxAggregateInputType
  }

  export type GetSysUserPostAggregateType<T extends SysUserPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSysUserPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysUserPost[P]>
      : GetScalarType<T[P], AggregateSysUserPost[P]>
  }




  export type SysUserPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserPostWhereInput
    orderBy?: SysUserPostOrderByWithAggregationInput | SysUserPostOrderByWithAggregationInput[]
    by: SysUserPostScalarFieldEnum[] | SysUserPostScalarFieldEnum
    having?: SysUserPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysUserPostCountAggregateInputType | true
    _avg?: SysUserPostAvgAggregateInputType
    _sum?: SysUserPostSumAggregateInputType
    _min?: SysUserPostMinAggregateInputType
    _max?: SysUserPostMaxAggregateInputType
  }

  export type SysUserPostGroupByOutputType = {
    userId: number
    postId: number
    _count: SysUserPostCountAggregateOutputType | null
    _avg: SysUserPostAvgAggregateOutputType | null
    _sum: SysUserPostSumAggregateOutputType | null
    _min: SysUserPostMinAggregateOutputType | null
    _max: SysUserPostMaxAggregateOutputType | null
  }

  type GetSysUserPostGroupByPayload<T extends SysUserPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysUserPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysUserPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysUserPostGroupByOutputType[P]>
            : GetScalarType<T[P], SysUserPostGroupByOutputType[P]>
        }
      >
    >


  export type SysUserPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postId?: boolean
    user?: boolean | SysUserDefaultArgs<ExtArgs>
    post?: boolean | SysPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysUserPost"]>


  export type SysUserPostSelectScalar = {
    userId?: boolean
    postId?: boolean
  }

  export type SysUserPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "postId", ExtArgs["result"]["sysUserPost"]>
  export type SysUserPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SysUserDefaultArgs<ExtArgs>
    post?: boolean | SysPostDefaultArgs<ExtArgs>
  }

  export type $SysUserPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysUserPost"
    objects: {
      user: Prisma.$SysUserPayload<ExtArgs>
      post: Prisma.$SysPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      postId: number
    }, ExtArgs["result"]["sysUserPost"]>
    composites: {}
  }

  type SysUserPostGetPayload<S extends boolean | null | undefined | SysUserPostDefaultArgs> = $Result.GetResult<Prisma.$SysUserPostPayload, S>

  type SysUserPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysUserPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysUserPostCountAggregateInputType | true
    }

  export interface SysUserPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysUserPost'], meta: { name: 'SysUserPost' } }
    /**
     * Find zero or one SysUserPost that matches the filter.
     * @param {SysUserPostFindUniqueArgs} args - Arguments to find a SysUserPost
     * @example
     * // Get one SysUserPost
     * const sysUserPost = await prisma.sysUserPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysUserPostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserPostFindUniqueArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysUserPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysUserPostFindUniqueOrThrowArgs} args - Arguments to find a SysUserPost
     * @example
     * // Get one SysUserPost
     * const sysUserPost = await prisma.sysUserPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysUserPostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysUserPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostFindFirstArgs} args - Arguments to find a SysUserPost
     * @example
     * // Get one SysUserPost
     * const sysUserPost = await prisma.sysUserPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysUserPostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserPostFindFirstArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysUserPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostFindFirstOrThrowArgs} args - Arguments to find a SysUserPost
     * @example
     * // Get one SysUserPost
     * const sysUserPost = await prisma.sysUserPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysUserPostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysUserPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysUserPosts
     * const sysUserPosts = await prisma.sysUserPost.findMany()
     * 
     * // Get first 10 SysUserPosts
     * const sysUserPosts = await prisma.sysUserPost.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sysUserPostWithUserIdOnly = await prisma.sysUserPost.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends SysUserPostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysUserPost.
     * @param {SysUserPostCreateArgs} args - Arguments to create a SysUserPost.
     * @example
     * // Create one SysUserPost
     * const SysUserPost = await prisma.sysUserPost.create({
     *   data: {
     *     // ... data to create a SysUserPost
     *   }
     * })
     * 
    **/
    create<T extends SysUserPostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserPostCreateArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysUserPosts.
     * @param {SysUserPostCreateManyArgs} args - Arguments to create many SysUserPosts.
     * @example
     * // Create many SysUserPosts
     * const sysUserPost = await prisma.sysUserPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysUserPostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysUserPost.
     * @param {SysUserPostDeleteArgs} args - Arguments to delete one SysUserPost.
     * @example
     * // Delete one SysUserPost
     * const SysUserPost = await prisma.sysUserPost.delete({
     *   where: {
     *     // ... filter to delete one SysUserPost
     *   }
     * })
     * 
    **/
    delete<T extends SysUserPostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserPostDeleteArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysUserPost.
     * @param {SysUserPostUpdateArgs} args - Arguments to update one SysUserPost.
     * @example
     * // Update one SysUserPost
     * const sysUserPost = await prisma.sysUserPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysUserPostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserPostUpdateArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysUserPosts.
     * @param {SysUserPostDeleteManyArgs} args - Arguments to filter SysUserPosts to delete.
     * @example
     * // Delete a few SysUserPosts
     * const { count } = await prisma.sysUserPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysUserPostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysUserPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysUserPosts
     * const sysUserPost = await prisma.sysUserPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysUserPostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysUserPost.
     * @param {SysUserPostUpsertArgs} args - Arguments to update or create a SysUserPost.
     * @example
     * // Update or create a SysUserPost
     * const sysUserPost = await prisma.sysUserPost.upsert({
     *   create: {
     *     // ... data to create a SysUserPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysUserPost we want to update
     *   }
     * })
    **/
    upsert<T extends SysUserPostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserPostUpsertArgs<ExtArgs>>
    ): Prisma__SysUserPostClient<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysUserPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostCountArgs} args - Arguments to filter SysUserPosts to count.
     * @example
     * // Count the number of SysUserPosts
     * const count = await prisma.sysUserPost.count({
     *   where: {
     *     // ... the filter for the SysUserPosts we want to count
     *   }
     * })
    **/
    count<T extends SysUserPostCountArgs>(
      args?: Subset<T, SysUserPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysUserPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysUserPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysUserPostAggregateArgs>(args: Subset<T, SysUserPostAggregateArgs>): Prisma.PrismaPromise<GetSysUserPostAggregateType<T>>

    /**
     * Group by SysUserPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysUserPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysUserPostGroupByArgs['orderBy'] }
        : { orderBy?: SysUserPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysUserPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysUserPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysUserPost model
   */
  readonly fields: SysUserPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysUserPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysUserPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends SysUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysUserDefaultArgs<ExtArgs>>): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    post<T extends SysPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysPostDefaultArgs<ExtArgs>>): Prisma__SysPostClient<$Result.GetResult<Prisma.$SysPostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysUserPost model
   */ 
  interface SysUserPostFieldRefs {
    readonly userId: FieldRef<"SysUserPost", 'Int'>
    readonly postId: FieldRef<"SysUserPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SysUserPost findUnique
   */
  export type SysUserPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * Filter, which SysUserPost to fetch.
     */
    where: SysUserPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost findUniqueOrThrow
   */
  export type SysUserPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * Filter, which SysUserPost to fetch.
     */
    where: SysUserPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost findFirst
   */
  export type SysUserPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * Filter, which SysUserPost to fetch.
     */
    where?: SysUserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserPosts to fetch.
     */
    orderBy?: SysUserPostOrderByWithRelationInput | SysUserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysUserPosts.
     */
    cursor?: SysUserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysUserPosts.
     */
    distinct?: SysUserPostScalarFieldEnum | SysUserPostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost findFirstOrThrow
   */
  export type SysUserPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * Filter, which SysUserPost to fetch.
     */
    where?: SysUserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserPosts to fetch.
     */
    orderBy?: SysUserPostOrderByWithRelationInput | SysUserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysUserPosts.
     */
    cursor?: SysUserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysUserPosts.
     */
    distinct?: SysUserPostScalarFieldEnum | SysUserPostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost findMany
   */
  export type SysUserPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * Filter, which SysUserPosts to fetch.
     */
    where?: SysUserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserPosts to fetch.
     */
    orderBy?: SysUserPostOrderByWithRelationInput | SysUserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysUserPosts.
     */
    cursor?: SysUserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserPosts.
     */
    skip?: number
    distinct?: SysUserPostScalarFieldEnum | SysUserPostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost create
   */
  export type SysUserPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SysUserPost.
     */
    data: XOR<SysUserPostCreateInput, SysUserPostUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost createMany
   */
  export type SysUserPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysUserPosts.
     */
    data: SysUserPostCreateManyInput | SysUserPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysUserPost update
   */
  export type SysUserPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SysUserPost.
     */
    data: XOR<SysUserPostUpdateInput, SysUserPostUncheckedUpdateInput>
    /**
     * Choose, which SysUserPost to update.
     */
    where: SysUserPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost updateMany
   */
  export type SysUserPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysUserPosts.
     */
    data: XOR<SysUserPostUpdateManyMutationInput, SysUserPostUncheckedUpdateManyInput>
    /**
     * Filter which SysUserPosts to update
     */
    where?: SysUserPostWhereInput
  }

  /**
   * SysUserPost upsert
   */
  export type SysUserPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SysUserPost to update in case it exists.
     */
    where: SysUserPostWhereUniqueInput
    /**
     * In case the SysUserPost found by the `where` argument doesn't exist, create a new SysUserPost with this data.
     */
    create: XOR<SysUserPostCreateInput, SysUserPostUncheckedCreateInput>
    /**
     * In case the SysUserPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysUserPostUpdateInput, SysUserPostUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost delete
   */
  export type SysUserPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    /**
     * Filter which SysUserPost to delete.
     */
    where: SysUserPostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserPost deleteMany
   */
  export type SysUserPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysUserPosts to delete
     */
    where?: SysUserPostWhereInput
  }

  /**
   * SysUserPost without action
   */
  export type SysUserPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
  }


  /**
   * Model SysRoleDept
   */

  export type AggregateSysRoleDept = {
    _count: SysRoleDeptCountAggregateOutputType | null
    _avg: SysRoleDeptAvgAggregateOutputType | null
    _sum: SysRoleDeptSumAggregateOutputType | null
    _min: SysRoleDeptMinAggregateOutputType | null
    _max: SysRoleDeptMaxAggregateOutputType | null
  }

  export type SysRoleDeptAvgAggregateOutputType = {
    roleId: number | null
    deptId: number | null
  }

  export type SysRoleDeptSumAggregateOutputType = {
    roleId: number | null
    deptId: number | null
  }

  export type SysRoleDeptMinAggregateOutputType = {
    roleId: number | null
    deptId: number | null
  }

  export type SysRoleDeptMaxAggregateOutputType = {
    roleId: number | null
    deptId: number | null
  }

  export type SysRoleDeptCountAggregateOutputType = {
    roleId: number
    deptId: number
    _all: number
  }


  export type SysRoleDeptAvgAggregateInputType = {
    roleId?: true
    deptId?: true
  }

  export type SysRoleDeptSumAggregateInputType = {
    roleId?: true
    deptId?: true
  }

  export type SysRoleDeptMinAggregateInputType = {
    roleId?: true
    deptId?: true
  }

  export type SysRoleDeptMaxAggregateInputType = {
    roleId?: true
    deptId?: true
  }

  export type SysRoleDeptCountAggregateInputType = {
    roleId?: true
    deptId?: true
    _all?: true
  }

  export type SysRoleDeptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysRoleDept to aggregate.
     */
    where?: SysRoleDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleDepts to fetch.
     */
    orderBy?: SysRoleDeptOrderByWithRelationInput | SysRoleDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysRoleDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleDepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysRoleDepts
    **/
    _count?: true | SysRoleDeptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysRoleDeptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysRoleDeptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysRoleDeptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysRoleDeptMaxAggregateInputType
  }

  export type GetSysRoleDeptAggregateType<T extends SysRoleDeptAggregateArgs> = {
        [P in keyof T & keyof AggregateSysRoleDept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysRoleDept[P]>
      : GetScalarType<T[P], AggregateSysRoleDept[P]>
  }




  export type SysRoleDeptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleDeptWhereInput
    orderBy?: SysRoleDeptOrderByWithAggregationInput | SysRoleDeptOrderByWithAggregationInput[]
    by: SysRoleDeptScalarFieldEnum[] | SysRoleDeptScalarFieldEnum
    having?: SysRoleDeptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysRoleDeptCountAggregateInputType | true
    _avg?: SysRoleDeptAvgAggregateInputType
    _sum?: SysRoleDeptSumAggregateInputType
    _min?: SysRoleDeptMinAggregateInputType
    _max?: SysRoleDeptMaxAggregateInputType
  }

  export type SysRoleDeptGroupByOutputType = {
    roleId: number
    deptId: number
    _count: SysRoleDeptCountAggregateOutputType | null
    _avg: SysRoleDeptAvgAggregateOutputType | null
    _sum: SysRoleDeptSumAggregateOutputType | null
    _min: SysRoleDeptMinAggregateOutputType | null
    _max: SysRoleDeptMaxAggregateOutputType | null
  }

  type GetSysRoleDeptGroupByPayload<T extends SysRoleDeptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysRoleDeptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysRoleDeptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysRoleDeptGroupByOutputType[P]>
            : GetScalarType<T[P], SysRoleDeptGroupByOutputType[P]>
        }
      >
    >


  export type SysRoleDeptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    deptId?: boolean
    role?: boolean | SysRoleDefaultArgs<ExtArgs>
    dept?: boolean | SysDeptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysRoleDept"]>


  export type SysRoleDeptSelectScalar = {
    roleId?: boolean
    deptId?: boolean
  }

  export type SysRoleDeptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "deptId", ExtArgs["result"]["sysRoleDept"]>
  export type SysRoleDeptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | SysRoleDefaultArgs<ExtArgs>
    dept?: boolean | SysDeptDefaultArgs<ExtArgs>
  }

  export type $SysRoleDeptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysRoleDept"
    objects: {
      role: Prisma.$SysRolePayload<ExtArgs>
      dept: Prisma.$SysDeptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      deptId: number
    }, ExtArgs["result"]["sysRoleDept"]>
    composites: {}
  }

  type SysRoleDeptGetPayload<S extends boolean | null | undefined | SysRoleDeptDefaultArgs> = $Result.GetResult<Prisma.$SysRoleDeptPayload, S>

  type SysRoleDeptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysRoleDeptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysRoleDeptCountAggregateInputType | true
    }

  export interface SysRoleDeptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysRoleDept'], meta: { name: 'SysRoleDept' } }
    /**
     * Find zero or one SysRoleDept that matches the filter.
     * @param {SysRoleDeptFindUniqueArgs} args - Arguments to find a SysRoleDept
     * @example
     * // Get one SysRoleDept
     * const sysRoleDept = await prisma.sysRoleDept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysRoleDeptFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeptFindUniqueArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysRoleDept that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysRoleDeptFindUniqueOrThrowArgs} args - Arguments to find a SysRoleDept
     * @example
     * // Get one SysRoleDept
     * const sysRoleDept = await prisma.sysRoleDept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysRoleDeptFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeptFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysRoleDept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptFindFirstArgs} args - Arguments to find a SysRoleDept
     * @example
     * // Get one SysRoleDept
     * const sysRoleDept = await prisma.sysRoleDept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysRoleDeptFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeptFindFirstArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysRoleDept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptFindFirstOrThrowArgs} args - Arguments to find a SysRoleDept
     * @example
     * // Get one SysRoleDept
     * const sysRoleDept = await prisma.sysRoleDept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysRoleDeptFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeptFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysRoleDepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysRoleDepts
     * const sysRoleDepts = await prisma.sysRoleDept.findMany()
     * 
     * // Get first 10 SysRoleDepts
     * const sysRoleDepts = await prisma.sysRoleDept.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const sysRoleDeptWithRoleIdOnly = await prisma.sysRoleDept.findMany({ select: { roleId: true } })
     * 
    **/
    findMany<T extends SysRoleDeptFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeptFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysRoleDept.
     * @param {SysRoleDeptCreateArgs} args - Arguments to create a SysRoleDept.
     * @example
     * // Create one SysRoleDept
     * const SysRoleDept = await prisma.sysRoleDept.create({
     *   data: {
     *     // ... data to create a SysRoleDept
     *   }
     * })
     * 
    **/
    create<T extends SysRoleDeptCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeptCreateArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysRoleDepts.
     * @param {SysRoleDeptCreateManyArgs} args - Arguments to create many SysRoleDepts.
     * @example
     * // Create many SysRoleDepts
     * const sysRoleDept = await prisma.sysRoleDept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysRoleDeptCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeptCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysRoleDept.
     * @param {SysRoleDeptDeleteArgs} args - Arguments to delete one SysRoleDept.
     * @example
     * // Delete one SysRoleDept
     * const SysRoleDept = await prisma.sysRoleDept.delete({
     *   where: {
     *     // ... filter to delete one SysRoleDept
     *   }
     * })
     * 
    **/
    delete<T extends SysRoleDeptDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeptDeleteArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysRoleDept.
     * @param {SysRoleDeptUpdateArgs} args - Arguments to update one SysRoleDept.
     * @example
     * // Update one SysRoleDept
     * const sysRoleDept = await prisma.sysRoleDept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysRoleDeptUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeptUpdateArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysRoleDepts.
     * @param {SysRoleDeptDeleteManyArgs} args - Arguments to filter SysRoleDepts to delete.
     * @example
     * // Delete a few SysRoleDepts
     * const { count } = await prisma.sysRoleDept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysRoleDeptDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeptDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysRoleDepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysRoleDepts
     * const sysRoleDept = await prisma.sysRoleDept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysRoleDeptUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeptUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysRoleDept.
     * @param {SysRoleDeptUpsertArgs} args - Arguments to update or create a SysRoleDept.
     * @example
     * // Update or create a SysRoleDept
     * const sysRoleDept = await prisma.sysRoleDept.upsert({
     *   create: {
     *     // ... data to create a SysRoleDept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysRoleDept we want to update
     *   }
     * })
    **/
    upsert<T extends SysRoleDeptUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeptUpsertArgs<ExtArgs>>
    ): Prisma__SysRoleDeptClient<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysRoleDepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptCountArgs} args - Arguments to filter SysRoleDepts to count.
     * @example
     * // Count the number of SysRoleDepts
     * const count = await prisma.sysRoleDept.count({
     *   where: {
     *     // ... the filter for the SysRoleDepts we want to count
     *   }
     * })
    **/
    count<T extends SysRoleDeptCountArgs>(
      args?: Subset<T, SysRoleDeptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysRoleDeptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysRoleDept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysRoleDeptAggregateArgs>(args: Subset<T, SysRoleDeptAggregateArgs>): Prisma.PrismaPromise<GetSysRoleDeptAggregateType<T>>

    /**
     * Group by SysRoleDept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleDeptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysRoleDeptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysRoleDeptGroupByArgs['orderBy'] }
        : { orderBy?: SysRoleDeptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysRoleDeptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysRoleDeptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysRoleDept model
   */
  readonly fields: SysRoleDeptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysRoleDept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysRoleDeptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends SysRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysRoleDefaultArgs<ExtArgs>>): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    dept<T extends SysDeptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysDeptDefaultArgs<ExtArgs>>): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysRoleDept model
   */ 
  interface SysRoleDeptFieldRefs {
    readonly roleId: FieldRef<"SysRoleDept", 'Int'>
    readonly deptId: FieldRef<"SysRoleDept", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SysRoleDept findUnique
   */
  export type SysRoleDeptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleDept to fetch.
     */
    where: SysRoleDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept findUniqueOrThrow
   */
  export type SysRoleDeptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleDept to fetch.
     */
    where: SysRoleDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept findFirst
   */
  export type SysRoleDeptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleDept to fetch.
     */
    where?: SysRoleDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleDepts to fetch.
     */
    orderBy?: SysRoleDeptOrderByWithRelationInput | SysRoleDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysRoleDepts.
     */
    cursor?: SysRoleDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleDepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysRoleDepts.
     */
    distinct?: SysRoleDeptScalarFieldEnum | SysRoleDeptScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept findFirstOrThrow
   */
  export type SysRoleDeptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleDept to fetch.
     */
    where?: SysRoleDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleDepts to fetch.
     */
    orderBy?: SysRoleDeptOrderByWithRelationInput | SysRoleDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysRoleDepts.
     */
    cursor?: SysRoleDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleDepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysRoleDepts.
     */
    distinct?: SysRoleDeptScalarFieldEnum | SysRoleDeptScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept findMany
   */
  export type SysRoleDeptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleDepts to fetch.
     */
    where?: SysRoleDeptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleDepts to fetch.
     */
    orderBy?: SysRoleDeptOrderByWithRelationInput | SysRoleDeptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysRoleDepts.
     */
    cursor?: SysRoleDeptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleDepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleDepts.
     */
    skip?: number
    distinct?: SysRoleDeptScalarFieldEnum | SysRoleDeptScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept create
   */
  export type SysRoleDeptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * The data needed to create a SysRoleDept.
     */
    data: XOR<SysRoleDeptCreateInput, SysRoleDeptUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept createMany
   */
  export type SysRoleDeptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysRoleDepts.
     */
    data: SysRoleDeptCreateManyInput | SysRoleDeptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysRoleDept update
   */
  export type SysRoleDeptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * The data needed to update a SysRoleDept.
     */
    data: XOR<SysRoleDeptUpdateInput, SysRoleDeptUncheckedUpdateInput>
    /**
     * Choose, which SysRoleDept to update.
     */
    where: SysRoleDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept updateMany
   */
  export type SysRoleDeptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysRoleDepts.
     */
    data: XOR<SysRoleDeptUpdateManyMutationInput, SysRoleDeptUncheckedUpdateManyInput>
    /**
     * Filter which SysRoleDepts to update
     */
    where?: SysRoleDeptWhereInput
  }

  /**
   * SysRoleDept upsert
   */
  export type SysRoleDeptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * The filter to search for the SysRoleDept to update in case it exists.
     */
    where: SysRoleDeptWhereUniqueInput
    /**
     * In case the SysRoleDept found by the `where` argument doesn't exist, create a new SysRoleDept with this data.
     */
    create: XOR<SysRoleDeptCreateInput, SysRoleDeptUncheckedCreateInput>
    /**
     * In case the SysRoleDept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysRoleDeptUpdateInput, SysRoleDeptUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept delete
   */
  export type SysRoleDeptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    /**
     * Filter which SysRoleDept to delete.
     */
    where: SysRoleDeptWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleDept deleteMany
   */
  export type SysRoleDeptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysRoleDepts to delete
     */
    where?: SysRoleDeptWhereInput
  }

  /**
   * SysRoleDept without action
   */
  export type SysRoleDeptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
  }


  /**
   * Model SysRoleMenu
   */

  export type AggregateSysRoleMenu = {
    _count: SysRoleMenuCountAggregateOutputType | null
    _avg: SysRoleMenuAvgAggregateOutputType | null
    _sum: SysRoleMenuSumAggregateOutputType | null
    _min: SysRoleMenuMinAggregateOutputType | null
    _max: SysRoleMenuMaxAggregateOutputType | null
  }

  export type SysRoleMenuAvgAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SysRoleMenuSumAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SysRoleMenuMinAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SysRoleMenuMaxAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SysRoleMenuCountAggregateOutputType = {
    roleId: number
    menuId: number
    _all: number
  }


  export type SysRoleMenuAvgAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SysRoleMenuSumAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SysRoleMenuMinAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SysRoleMenuMaxAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SysRoleMenuCountAggregateInputType = {
    roleId?: true
    menuId?: true
    _all?: true
  }

  export type SysRoleMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysRoleMenu to aggregate.
     */
    where?: SysRoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleMenus to fetch.
     */
    orderBy?: SysRoleMenuOrderByWithRelationInput | SysRoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysRoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysRoleMenus
    **/
    _count?: true | SysRoleMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysRoleMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysRoleMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysRoleMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysRoleMenuMaxAggregateInputType
  }

  export type GetSysRoleMenuAggregateType<T extends SysRoleMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateSysRoleMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysRoleMenu[P]>
      : GetScalarType<T[P], AggregateSysRoleMenu[P]>
  }




  export type SysRoleMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleMenuWhereInput
    orderBy?: SysRoleMenuOrderByWithAggregationInput | SysRoleMenuOrderByWithAggregationInput[]
    by: SysRoleMenuScalarFieldEnum[] | SysRoleMenuScalarFieldEnum
    having?: SysRoleMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysRoleMenuCountAggregateInputType | true
    _avg?: SysRoleMenuAvgAggregateInputType
    _sum?: SysRoleMenuSumAggregateInputType
    _min?: SysRoleMenuMinAggregateInputType
    _max?: SysRoleMenuMaxAggregateInputType
  }

  export type SysRoleMenuGroupByOutputType = {
    roleId: number
    menuId: number
    _count: SysRoleMenuCountAggregateOutputType | null
    _avg: SysRoleMenuAvgAggregateOutputType | null
    _sum: SysRoleMenuSumAggregateOutputType | null
    _min: SysRoleMenuMinAggregateOutputType | null
    _max: SysRoleMenuMaxAggregateOutputType | null
  }

  type GetSysRoleMenuGroupByPayload<T extends SysRoleMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysRoleMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysRoleMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysRoleMenuGroupByOutputType[P]>
            : GetScalarType<T[P], SysRoleMenuGroupByOutputType[P]>
        }
      >
    >


  export type SysRoleMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    menuId?: boolean
    menu?: boolean | SysMenuDefaultArgs<ExtArgs>
    role?: boolean | SysRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysRoleMenu"]>


  export type SysRoleMenuSelectScalar = {
    roleId?: boolean
    menuId?: boolean
  }

  export type SysRoleMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "menuId", ExtArgs["result"]["sysRoleMenu"]>
  export type SysRoleMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | SysMenuDefaultArgs<ExtArgs>
    role?: boolean | SysRoleDefaultArgs<ExtArgs>
  }

  export type $SysRoleMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysRoleMenu"
    objects: {
      menu: Prisma.$SysMenuPayload<ExtArgs>
      role: Prisma.$SysRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      menuId: number
    }, ExtArgs["result"]["sysRoleMenu"]>
    composites: {}
  }

  type SysRoleMenuGetPayload<S extends boolean | null | undefined | SysRoleMenuDefaultArgs> = $Result.GetResult<Prisma.$SysRoleMenuPayload, S>

  type SysRoleMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysRoleMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysRoleMenuCountAggregateInputType | true
    }

  export interface SysRoleMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysRoleMenu'], meta: { name: 'SysRoleMenu' } }
    /**
     * Find zero or one SysRoleMenu that matches the filter.
     * @param {SysRoleMenuFindUniqueArgs} args - Arguments to find a SysRoleMenu
     * @example
     * // Get one SysRoleMenu
     * const sysRoleMenu = await prisma.sysRoleMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysRoleMenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleMenuFindUniqueArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysRoleMenu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysRoleMenuFindUniqueOrThrowArgs} args - Arguments to find a SysRoleMenu
     * @example
     * // Get one SysRoleMenu
     * const sysRoleMenu = await prisma.sysRoleMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysRoleMenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleMenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysRoleMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuFindFirstArgs} args - Arguments to find a SysRoleMenu
     * @example
     * // Get one SysRoleMenu
     * const sysRoleMenu = await prisma.sysRoleMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysRoleMenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleMenuFindFirstArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysRoleMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuFindFirstOrThrowArgs} args - Arguments to find a SysRoleMenu
     * @example
     * // Get one SysRoleMenu
     * const sysRoleMenu = await prisma.sysRoleMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysRoleMenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleMenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysRoleMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysRoleMenus
     * const sysRoleMenus = await prisma.sysRoleMenu.findMany()
     * 
     * // Get first 10 SysRoleMenus
     * const sysRoleMenus = await prisma.sysRoleMenu.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const sysRoleMenuWithRoleIdOnly = await prisma.sysRoleMenu.findMany({ select: { roleId: true } })
     * 
    **/
    findMany<T extends SysRoleMenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleMenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysRoleMenu.
     * @param {SysRoleMenuCreateArgs} args - Arguments to create a SysRoleMenu.
     * @example
     * // Create one SysRoleMenu
     * const SysRoleMenu = await prisma.sysRoleMenu.create({
     *   data: {
     *     // ... data to create a SysRoleMenu
     *   }
     * })
     * 
    **/
    create<T extends SysRoleMenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleMenuCreateArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysRoleMenus.
     * @param {SysRoleMenuCreateManyArgs} args - Arguments to create many SysRoleMenus.
     * @example
     * // Create many SysRoleMenus
     * const sysRoleMenu = await prisma.sysRoleMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysRoleMenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleMenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysRoleMenu.
     * @param {SysRoleMenuDeleteArgs} args - Arguments to delete one SysRoleMenu.
     * @example
     * // Delete one SysRoleMenu
     * const SysRoleMenu = await prisma.sysRoleMenu.delete({
     *   where: {
     *     // ... filter to delete one SysRoleMenu
     *   }
     * })
     * 
    **/
    delete<T extends SysRoleMenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleMenuDeleteArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysRoleMenu.
     * @param {SysRoleMenuUpdateArgs} args - Arguments to update one SysRoleMenu.
     * @example
     * // Update one SysRoleMenu
     * const sysRoleMenu = await prisma.sysRoleMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysRoleMenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleMenuUpdateArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysRoleMenus.
     * @param {SysRoleMenuDeleteManyArgs} args - Arguments to filter SysRoleMenus to delete.
     * @example
     * // Delete a few SysRoleMenus
     * const { count } = await prisma.sysRoleMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysRoleMenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleMenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysRoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysRoleMenus
     * const sysRoleMenu = await prisma.sysRoleMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysRoleMenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleMenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysRoleMenu.
     * @param {SysRoleMenuUpsertArgs} args - Arguments to update or create a SysRoleMenu.
     * @example
     * // Update or create a SysRoleMenu
     * const sysRoleMenu = await prisma.sysRoleMenu.upsert({
     *   create: {
     *     // ... data to create a SysRoleMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysRoleMenu we want to update
     *   }
     * })
    **/
    upsert<T extends SysRoleMenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleMenuUpsertArgs<ExtArgs>>
    ): Prisma__SysRoleMenuClient<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysRoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuCountArgs} args - Arguments to filter SysRoleMenus to count.
     * @example
     * // Count the number of SysRoleMenus
     * const count = await prisma.sysRoleMenu.count({
     *   where: {
     *     // ... the filter for the SysRoleMenus we want to count
     *   }
     * })
    **/
    count<T extends SysRoleMenuCountArgs>(
      args?: Subset<T, SysRoleMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysRoleMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysRoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysRoleMenuAggregateArgs>(args: Subset<T, SysRoleMenuAggregateArgs>): Prisma.PrismaPromise<GetSysRoleMenuAggregateType<T>>

    /**
     * Group by SysRoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysRoleMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysRoleMenuGroupByArgs['orderBy'] }
        : { orderBy?: SysRoleMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysRoleMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysRoleMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysRoleMenu model
   */
  readonly fields: SysRoleMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysRoleMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysRoleMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    menu<T extends SysMenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysMenuDefaultArgs<ExtArgs>>): Prisma__SysMenuClient<$Result.GetResult<Prisma.$SysMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends SysRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysRoleDefaultArgs<ExtArgs>>): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysRoleMenu model
   */ 
  interface SysRoleMenuFieldRefs {
    readonly roleId: FieldRef<"SysRoleMenu", 'Int'>
    readonly menuId: FieldRef<"SysRoleMenu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SysRoleMenu findUnique
   */
  export type SysRoleMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleMenu to fetch.
     */
    where: SysRoleMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu findUniqueOrThrow
   */
  export type SysRoleMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleMenu to fetch.
     */
    where: SysRoleMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu findFirst
   */
  export type SysRoleMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleMenu to fetch.
     */
    where?: SysRoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleMenus to fetch.
     */
    orderBy?: SysRoleMenuOrderByWithRelationInput | SysRoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysRoleMenus.
     */
    cursor?: SysRoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysRoleMenus.
     */
    distinct?: SysRoleMenuScalarFieldEnum | SysRoleMenuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu findFirstOrThrow
   */
  export type SysRoleMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleMenu to fetch.
     */
    where?: SysRoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleMenus to fetch.
     */
    orderBy?: SysRoleMenuOrderByWithRelationInput | SysRoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysRoleMenus.
     */
    cursor?: SysRoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysRoleMenus.
     */
    distinct?: SysRoleMenuScalarFieldEnum | SysRoleMenuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu findMany
   */
  export type SysRoleMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which SysRoleMenus to fetch.
     */
    where?: SysRoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoleMenus to fetch.
     */
    orderBy?: SysRoleMenuOrderByWithRelationInput | SysRoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysRoleMenus.
     */
    cursor?: SysRoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoleMenus.
     */
    skip?: number
    distinct?: SysRoleMenuScalarFieldEnum | SysRoleMenuScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu create
   */
  export type SysRoleMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a SysRoleMenu.
     */
    data: XOR<SysRoleMenuCreateInput, SysRoleMenuUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu createMany
   */
  export type SysRoleMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysRoleMenus.
     */
    data: SysRoleMenuCreateManyInput | SysRoleMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysRoleMenu update
   */
  export type SysRoleMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a SysRoleMenu.
     */
    data: XOR<SysRoleMenuUpdateInput, SysRoleMenuUncheckedUpdateInput>
    /**
     * Choose, which SysRoleMenu to update.
     */
    where: SysRoleMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu updateMany
   */
  export type SysRoleMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysRoleMenus.
     */
    data: XOR<SysRoleMenuUpdateManyMutationInput, SysRoleMenuUncheckedUpdateManyInput>
    /**
     * Filter which SysRoleMenus to update
     */
    where?: SysRoleMenuWhereInput
  }

  /**
   * SysRoleMenu upsert
   */
  export type SysRoleMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the SysRoleMenu to update in case it exists.
     */
    where: SysRoleMenuWhereUniqueInput
    /**
     * In case the SysRoleMenu found by the `where` argument doesn't exist, create a new SysRoleMenu with this data.
     */
    create: XOR<SysRoleMenuCreateInput, SysRoleMenuUncheckedCreateInput>
    /**
     * In case the SysRoleMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysRoleMenuUpdateInput, SysRoleMenuUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu delete
   */
  export type SysRoleMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    /**
     * Filter which SysRoleMenu to delete.
     */
    where: SysRoleMenuWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRoleMenu deleteMany
   */
  export type SysRoleMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysRoleMenus to delete
     */
    where?: SysRoleMenuWhereInput
  }

  /**
   * SysRoleMenu without action
   */
  export type SysRoleMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
  }


  /**
   * Model SysUser
   */

  export type AggregateSysUser = {
    _count: SysUserCountAggregateOutputType | null
    _avg: SysUserAvgAggregateOutputType | null
    _sum: SysUserSumAggregateOutputType | null
    _min: SysUserMinAggregateOutputType | null
    _max: SysUserMaxAggregateOutputType | null
  }

  export type SysUserAvgAggregateOutputType = {
    userId: number | null
    deptId: number | null
  }

  export type SysUserSumAggregateOutputType = {
    userId: number | null
    deptId: number | null
  }

  export type SysUserMinAggregateOutputType = {
    userId: number | null
    deptId: number | null
    userName: string | null
    nickName: string | null
    userType: string | null
    email: string | null
    phonenumber: string | null
    sex: string | null
    avatar: string | null
    password: string | null
    status: string | null
    loginIp: string | null
    loginDate: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysUserMaxAggregateOutputType = {
    userId: number | null
    deptId: number | null
    userName: string | null
    nickName: string | null
    userType: string | null
    email: string | null
    phonenumber: string | null
    sex: string | null
    avatar: string | null
    password: string | null
    status: string | null
    loginIp: string | null
    loginDate: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysUserCountAggregateOutputType = {
    userId: number
    deptId: number
    userName: number
    nickName: number
    userType: number
    email: number
    phonenumber: number
    sex: number
    avatar: number
    password: number
    status: number
    loginIp: number
    loginDate: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysUserAvgAggregateInputType = {
    userId?: true
    deptId?: true
  }

  export type SysUserSumAggregateInputType = {
    userId?: true
    deptId?: true
  }

  export type SysUserMinAggregateInputType = {
    userId?: true
    deptId?: true
    userName?: true
    nickName?: true
    userType?: true
    email?: true
    phonenumber?: true
    sex?: true
    avatar?: true
    password?: true
    status?: true
    loginIp?: true
    loginDate?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysUserMaxAggregateInputType = {
    userId?: true
    deptId?: true
    userName?: true
    nickName?: true
    userType?: true
    email?: true
    phonenumber?: true
    sex?: true
    avatar?: true
    password?: true
    status?: true
    loginIp?: true
    loginDate?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysUserCountAggregateInputType = {
    userId?: true
    deptId?: true
    userName?: true
    nickName?: true
    userType?: true
    email?: true
    phonenumber?: true
    sex?: true
    avatar?: true
    password?: true
    status?: true
    loginIp?: true
    loginDate?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysUser to aggregate.
     */
    where?: SysUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUsers to fetch.
     */
    orderBy?: SysUserOrderByWithRelationInput | SysUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysUsers
    **/
    _count?: true | SysUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysUserMaxAggregateInputType
  }

  export type GetSysUserAggregateType<T extends SysUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSysUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysUser[P]>
      : GetScalarType<T[P], AggregateSysUser[P]>
  }




  export type SysUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserWhereInput
    orderBy?: SysUserOrderByWithAggregationInput | SysUserOrderByWithAggregationInput[]
    by: SysUserScalarFieldEnum[] | SysUserScalarFieldEnum
    having?: SysUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysUserCountAggregateInputType | true
    _avg?: SysUserAvgAggregateInputType
    _sum?: SysUserSumAggregateInputType
    _min?: SysUserMinAggregateInputType
    _max?: SysUserMaxAggregateInputType
  }

  export type SysUserGroupByOutputType = {
    userId: number
    deptId: number | null
    userName: string
    nickName: string
    userType: string | null
    email: string | null
    phonenumber: string | null
    sex: string | null
    avatar: string | null
    password: string | null
    status: string | null
    loginIp: string | null
    loginDate: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysUserCountAggregateOutputType | null
    _avg: SysUserAvgAggregateOutputType | null
    _sum: SysUserSumAggregateOutputType | null
    _min: SysUserMinAggregateOutputType | null
    _max: SysUserMaxAggregateOutputType | null
  }

  type GetSysUserGroupByPayload<T extends SysUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysUserGroupByOutputType[P]>
            : GetScalarType<T[P], SysUserGroupByOutputType[P]>
        }
      >
    >


  export type SysUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    deptId?: boolean
    userName?: boolean
    nickName?: boolean
    userType?: boolean
    email?: boolean
    phonenumber?: boolean
    sex?: boolean
    avatar?: boolean
    password?: boolean
    status?: boolean
    loginIp?: boolean
    loginDate?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    dept?: boolean | SysUser$deptArgs<ExtArgs>
    roles?: boolean | SysUser$rolesArgs<ExtArgs>
    posts?: boolean | SysUser$postsArgs<ExtArgs>
    _count?: boolean | SysUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysUser"]>


  export type SysUserSelectScalar = {
    userId?: boolean
    deptId?: boolean
    userName?: boolean
    nickName?: boolean
    userType?: boolean
    email?: boolean
    phonenumber?: boolean
    sex?: boolean
    avatar?: boolean
    password?: boolean
    status?: boolean
    loginIp?: boolean
    loginDate?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "deptId" | "userName" | "nickName" | "userType" | "email" | "phonenumber" | "sex" | "avatar" | "password" | "status" | "loginIp" | "loginDate" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysUser"]>
  export type SysUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dept?: boolean | SysUser$deptArgs<ExtArgs>
    roles?: boolean | SysUser$rolesArgs<ExtArgs>
    posts?: boolean | SysUser$postsArgs<ExtArgs>
    _count?: boolean | SysUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SysUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysUser"
    objects: {
      dept: Prisma.$SysDeptPayload<ExtArgs> | null
      roles: Prisma.$SysUserRolePayload<ExtArgs>[]
      posts: Prisma.$SysUserPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      deptId: number | null
      userName: string
      nickName: string
      userType: string | null
      email: string | null
      phonenumber: string | null
      sex: string | null
      avatar: string | null
      password: string | null
      status: string | null
      loginIp: string | null
      loginDate: string | null
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysUser"]>
    composites: {}
  }

  type SysUserGetPayload<S extends boolean | null | undefined | SysUserDefaultArgs> = $Result.GetResult<Prisma.$SysUserPayload, S>

  type SysUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysUserCountAggregateInputType | true
    }

  export interface SysUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysUser'], meta: { name: 'SysUser' } }
    /**
     * Find zero or one SysUser that matches the filter.
     * @param {SysUserFindUniqueArgs} args - Arguments to find a SysUser
     * @example
     * // Get one SysUser
     * const sysUser = await prisma.sysUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserFindUniqueArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysUserFindUniqueOrThrowArgs} args - Arguments to find a SysUser
     * @example
     * // Get one SysUser
     * const sysUser = await prisma.sysUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserFindFirstArgs} args - Arguments to find a SysUser
     * @example
     * // Get one SysUser
     * const sysUser = await prisma.sysUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserFindFirstArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserFindFirstOrThrowArgs} args - Arguments to find a SysUser
     * @example
     * // Get one SysUser
     * const sysUser = await prisma.sysUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysUsers
     * const sysUsers = await prisma.sysUser.findMany()
     * 
     * // Get first 10 SysUsers
     * const sysUsers = await prisma.sysUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sysUserWithUserIdOnly = await prisma.sysUser.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends SysUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysUser.
     * @param {SysUserCreateArgs} args - Arguments to create a SysUser.
     * @example
     * // Create one SysUser
     * const SysUser = await prisma.sysUser.create({
     *   data: {
     *     // ... data to create a SysUser
     *   }
     * })
     * 
    **/
    create<T extends SysUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserCreateArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysUsers.
     * @param {SysUserCreateManyArgs} args - Arguments to create many SysUsers.
     * @example
     * // Create many SysUsers
     * const sysUser = await prisma.sysUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysUser.
     * @param {SysUserDeleteArgs} args - Arguments to delete one SysUser.
     * @example
     * // Delete one SysUser
     * const SysUser = await prisma.sysUser.delete({
     *   where: {
     *     // ... filter to delete one SysUser
     *   }
     * })
     * 
    **/
    delete<T extends SysUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserDeleteArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysUser.
     * @param {SysUserUpdateArgs} args - Arguments to update one SysUser.
     * @example
     * // Update one SysUser
     * const sysUser = await prisma.sysUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserUpdateArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysUsers.
     * @param {SysUserDeleteManyArgs} args - Arguments to filter SysUsers to delete.
     * @example
     * // Delete a few SysUsers
     * const { count } = await prisma.sysUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysUsers
     * const sysUser = await prisma.sysUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysUser.
     * @param {SysUserUpsertArgs} args - Arguments to update or create a SysUser.
     * @example
     * // Update or create a SysUser
     * const sysUser = await prisma.sysUser.upsert({
     *   create: {
     *     // ... data to create a SysUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysUser we want to update
     *   }
     * })
    **/
    upsert<T extends SysUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserUpsertArgs<ExtArgs>>
    ): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserCountArgs} args - Arguments to filter SysUsers to count.
     * @example
     * // Count the number of SysUsers
     * const count = await prisma.sysUser.count({
     *   where: {
     *     // ... the filter for the SysUsers we want to count
     *   }
     * })
    **/
    count<T extends SysUserCountArgs>(
      args?: Subset<T, SysUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysUserAggregateArgs>(args: Subset<T, SysUserAggregateArgs>): Prisma.PrismaPromise<GetSysUserAggregateType<T>>

    /**
     * Group by SysUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysUserGroupByArgs['orderBy'] }
        : { orderBy?: SysUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysUser model
   */
  readonly fields: SysUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dept<T extends SysUser$deptArgs<ExtArgs> = {}>(args?: Subset<T, SysUser$deptArgs<ExtArgs>>): Prisma__SysDeptClient<$Result.GetResult<Prisma.$SysDeptPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    roles<T extends SysUser$rolesArgs<ExtArgs> = {}>(args?: Subset<T, SysUser$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    posts<T extends SysUser$postsArgs<ExtArgs> = {}>(args?: Subset<T, SysUser$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysUser model
   */ 
  interface SysUserFieldRefs {
    readonly userId: FieldRef<"SysUser", 'Int'>
    readonly deptId: FieldRef<"SysUser", 'Int'>
    readonly userName: FieldRef<"SysUser", 'String'>
    readonly nickName: FieldRef<"SysUser", 'String'>
    readonly userType: FieldRef<"SysUser", 'String'>
    readonly email: FieldRef<"SysUser", 'String'>
    readonly phonenumber: FieldRef<"SysUser", 'String'>
    readonly sex: FieldRef<"SysUser", 'String'>
    readonly avatar: FieldRef<"SysUser", 'String'>
    readonly password: FieldRef<"SysUser", 'String'>
    readonly status: FieldRef<"SysUser", 'String'>
    readonly loginIp: FieldRef<"SysUser", 'String'>
    readonly loginDate: FieldRef<"SysUser", 'String'>
    readonly createBy: FieldRef<"SysUser", 'String'>
    readonly createTime: FieldRef<"SysUser", 'String'>
    readonly updateBy: FieldRef<"SysUser", 'String'>
    readonly updateTime: FieldRef<"SysUser", 'String'>
    readonly remark: FieldRef<"SysUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysUser findUnique
   */
  export type SysUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * Filter, which SysUser to fetch.
     */
    where: SysUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser findUniqueOrThrow
   */
  export type SysUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * Filter, which SysUser to fetch.
     */
    where: SysUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser findFirst
   */
  export type SysUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * Filter, which SysUser to fetch.
     */
    where?: SysUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUsers to fetch.
     */
    orderBy?: SysUserOrderByWithRelationInput | SysUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysUsers.
     */
    cursor?: SysUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysUsers.
     */
    distinct?: SysUserScalarFieldEnum | SysUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser findFirstOrThrow
   */
  export type SysUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * Filter, which SysUser to fetch.
     */
    where?: SysUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUsers to fetch.
     */
    orderBy?: SysUserOrderByWithRelationInput | SysUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysUsers.
     */
    cursor?: SysUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysUsers.
     */
    distinct?: SysUserScalarFieldEnum | SysUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser findMany
   */
  export type SysUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * Filter, which SysUsers to fetch.
     */
    where?: SysUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUsers to fetch.
     */
    orderBy?: SysUserOrderByWithRelationInput | SysUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysUsers.
     */
    cursor?: SysUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUsers.
     */
    skip?: number
    distinct?: SysUserScalarFieldEnum | SysUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser create
   */
  export type SysUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SysUser.
     */
    data: XOR<SysUserCreateInput, SysUserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser createMany
   */
  export type SysUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysUsers.
     */
    data: SysUserCreateManyInput | SysUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysUser update
   */
  export type SysUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SysUser.
     */
    data: XOR<SysUserUpdateInput, SysUserUncheckedUpdateInput>
    /**
     * Choose, which SysUser to update.
     */
    where: SysUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser updateMany
   */
  export type SysUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysUsers.
     */
    data: XOR<SysUserUpdateManyMutationInput, SysUserUncheckedUpdateManyInput>
    /**
     * Filter which SysUsers to update
     */
    where?: SysUserWhereInput
  }

  /**
   * SysUser upsert
   */
  export type SysUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SysUser to update in case it exists.
     */
    where: SysUserWhereUniqueInput
    /**
     * In case the SysUser found by the `where` argument doesn't exist, create a new SysUser with this data.
     */
    create: XOR<SysUserCreateInput, SysUserUncheckedCreateInput>
    /**
     * In case the SysUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysUserUpdateInput, SysUserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser delete
   */
  export type SysUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
    /**
     * Filter which SysUser to delete.
     */
    where: SysUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUser deleteMany
   */
  export type SysUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysUsers to delete
     */
    where?: SysUserWhereInput
  }

  /**
   * SysUser.dept
   */
  export type SysUser$deptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysDept
     */
    select?: SysDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysDept
     */
    omit?: SysDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysDeptInclude<ExtArgs> | null
    where?: SysDeptWhereInput
  }

  /**
   * SysUser.roles
   */
  export type SysUser$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    where?: SysUserRoleWhereInput
    orderBy?: SysUserRoleOrderByWithRelationInput | SysUserRoleOrderByWithRelationInput[]
    cursor?: SysUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysUserRoleScalarFieldEnum | SysUserRoleScalarFieldEnum[]
  }

  /**
   * SysUser.posts
   */
  export type SysUser$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserPost
     */
    select?: SysUserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserPost
     */
    omit?: SysUserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserPostInclude<ExtArgs> | null
    where?: SysUserPostWhereInput
    orderBy?: SysUserPostOrderByWithRelationInput | SysUserPostOrderByWithRelationInput[]
    cursor?: SysUserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysUserPostScalarFieldEnum | SysUserPostScalarFieldEnum[]
  }

  /**
   * SysUser without action
   */
  export type SysUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUser
     */
    select?: SysUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUser
     */
    omit?: SysUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserInclude<ExtArgs> | null
  }


  /**
   * Model SysRole
   */

  export type AggregateSysRole = {
    _count: SysRoleCountAggregateOutputType | null
    _avg: SysRoleAvgAggregateOutputType | null
    _sum: SysRoleSumAggregateOutputType | null
    _min: SysRoleMinAggregateOutputType | null
    _max: SysRoleMaxAggregateOutputType | null
  }

  export type SysRoleAvgAggregateOutputType = {
    roleId: number | null
    roleSort: number | null
    menuCheckStrictly: number | null
    deptCheckStrictly: number | null
  }

  export type SysRoleSumAggregateOutputType = {
    roleId: number | null
    roleSort: number | null
    menuCheckStrictly: number | null
    deptCheckStrictly: number | null
  }

  export type SysRoleMinAggregateOutputType = {
    roleId: number | null
    roleName: string | null
    roleKey: string | null
    roleSort: number | null
    dataScope: string | null
    menuCheckStrictly: number | null
    deptCheckStrictly: number | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysRoleMaxAggregateOutputType = {
    roleId: number | null
    roleName: string | null
    roleKey: string | null
    roleSort: number | null
    dataScope: string | null
    menuCheckStrictly: number | null
    deptCheckStrictly: number | null
    status: string | null
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
  }

  export type SysRoleCountAggregateOutputType = {
    roleId: number
    roleName: number
    roleKey: number
    roleSort: number
    dataScope: number
    menuCheckStrictly: number
    deptCheckStrictly: number
    status: number
    createBy: number
    createTime: number
    updateBy: number
    updateTime: number
    remark: number
    _all: number
  }


  export type SysRoleAvgAggregateInputType = {
    roleId?: true
    roleSort?: true
    menuCheckStrictly?: true
    deptCheckStrictly?: true
  }

  export type SysRoleSumAggregateInputType = {
    roleId?: true
    roleSort?: true
    menuCheckStrictly?: true
    deptCheckStrictly?: true
  }

  export type SysRoleMinAggregateInputType = {
    roleId?: true
    roleName?: true
    roleKey?: true
    roleSort?: true
    dataScope?: true
    menuCheckStrictly?: true
    deptCheckStrictly?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysRoleMaxAggregateInputType = {
    roleId?: true
    roleName?: true
    roleKey?: true
    roleSort?: true
    dataScope?: true
    menuCheckStrictly?: true
    deptCheckStrictly?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
  }

  export type SysRoleCountAggregateInputType = {
    roleId?: true
    roleName?: true
    roleKey?: true
    roleSort?: true
    dataScope?: true
    menuCheckStrictly?: true
    deptCheckStrictly?: true
    status?: true
    createBy?: true
    createTime?: true
    updateBy?: true
    updateTime?: true
    remark?: true
    _all?: true
  }

  export type SysRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysRole to aggregate.
     */
    where?: SysRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoles to fetch.
     */
    orderBy?: SysRoleOrderByWithRelationInput | SysRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysRoles
    **/
    _count?: true | SysRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysRoleMaxAggregateInputType
  }

  export type GetSysRoleAggregateType<T extends SysRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateSysRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysRole[P]>
      : GetScalarType<T[P], AggregateSysRole[P]>
  }




  export type SysRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysRoleWhereInput
    orderBy?: SysRoleOrderByWithAggregationInput | SysRoleOrderByWithAggregationInput[]
    by: SysRoleScalarFieldEnum[] | SysRoleScalarFieldEnum
    having?: SysRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysRoleCountAggregateInputType | true
    _avg?: SysRoleAvgAggregateInputType
    _sum?: SysRoleSumAggregateInputType
    _min?: SysRoleMinAggregateInputType
    _max?: SysRoleMaxAggregateInputType
  }

  export type SysRoleGroupByOutputType = {
    roleId: number
    roleName: string
    roleKey: string
    roleSort: number
    dataScope: string | null
    menuCheckStrictly: number | null
    deptCheckStrictly: number | null
    status: string
    createBy: string | null
    createTime: string | null
    updateBy: string | null
    updateTime: string | null
    remark: string | null
    _count: SysRoleCountAggregateOutputType | null
    _avg: SysRoleAvgAggregateOutputType | null
    _sum: SysRoleSumAggregateOutputType | null
    _min: SysRoleMinAggregateOutputType | null
    _max: SysRoleMaxAggregateOutputType | null
  }

  type GetSysRoleGroupByPayload<T extends SysRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysRoleGroupByOutputType[P]>
            : GetScalarType<T[P], SysRoleGroupByOutputType[P]>
        }
      >
    >


  export type SysRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    roleKey?: boolean
    roleSort?: boolean
    dataScope?: boolean
    menuCheckStrictly?: boolean
    deptCheckStrictly?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
    users?: boolean | SysRole$usersArgs<ExtArgs>
    menus?: boolean | SysRole$menusArgs<ExtArgs>
    depts?: boolean | SysRole$deptsArgs<ExtArgs>
    _count?: boolean | SysRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysRole"]>


  export type SysRoleSelectScalar = {
    roleId?: boolean
    roleName?: boolean
    roleKey?: boolean
    roleSort?: boolean
    dataScope?: boolean
    menuCheckStrictly?: boolean
    deptCheckStrictly?: boolean
    status?: boolean
    createBy?: boolean
    createTime?: boolean
    updateBy?: boolean
    updateTime?: boolean
    remark?: boolean
  }

  export type SysRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "roleName" | "roleKey" | "roleSort" | "dataScope" | "menuCheckStrictly" | "deptCheckStrictly" | "status" | "createBy" | "createTime" | "updateBy" | "updateTime" | "remark", ExtArgs["result"]["sysRole"]>
  export type SysRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SysRole$usersArgs<ExtArgs>
    menus?: boolean | SysRole$menusArgs<ExtArgs>
    depts?: boolean | SysRole$deptsArgs<ExtArgs>
    _count?: boolean | SysRoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SysRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysRole"
    objects: {
      users: Prisma.$SysUserRolePayload<ExtArgs>[]
      menus: Prisma.$SysRoleMenuPayload<ExtArgs>[]
      depts: Prisma.$SysRoleDeptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      roleName: string
      roleKey: string
      roleSort: number
      dataScope: string | null
      menuCheckStrictly: number | null
      deptCheckStrictly: number | null
      status: string
      createBy: string | null
      createTime: string | null
      updateBy: string | null
      updateTime: string | null
      remark: string | null
    }, ExtArgs["result"]["sysRole"]>
    composites: {}
  }

  type SysRoleGetPayload<S extends boolean | null | undefined | SysRoleDefaultArgs> = $Result.GetResult<Prisma.$SysRolePayload, S>

  type SysRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysRoleCountAggregateInputType | true
    }

  export interface SysRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysRole'], meta: { name: 'SysRole' } }
    /**
     * Find zero or one SysRole that matches the filter.
     * @param {SysRoleFindUniqueArgs} args - Arguments to find a SysRole
     * @example
     * // Get one SysRole
     * const sysRole = await prisma.sysRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysRoleFindUniqueOrThrowArgs} args - Arguments to find a SysRole
     * @example
     * // Get one SysRole
     * const sysRole = await prisma.sysRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleFindFirstArgs} args - Arguments to find a SysRole
     * @example
     * // Get one SysRole
     * const sysRole = await prisma.sysRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleFindFirstArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleFindFirstOrThrowArgs} args - Arguments to find a SysRole
     * @example
     * // Get one SysRole
     * const sysRole = await prisma.sysRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysRoles
     * const sysRoles = await prisma.sysRole.findMany()
     * 
     * // Get first 10 SysRoles
     * const sysRoles = await prisma.sysRole.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const sysRoleWithRoleIdOnly = await prisma.sysRole.findMany({ select: { roleId: true } })
     * 
    **/
    findMany<T extends SysRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysRole.
     * @param {SysRoleCreateArgs} args - Arguments to create a SysRole.
     * @example
     * // Create one SysRole
     * const SysRole = await prisma.sysRole.create({
     *   data: {
     *     // ... data to create a SysRole
     *   }
     * })
     * 
    **/
    create<T extends SysRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleCreateArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysRoles.
     * @param {SysRoleCreateManyArgs} args - Arguments to create many SysRoles.
     * @example
     * // Create many SysRoles
     * const sysRole = await prisma.sysRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysRole.
     * @param {SysRoleDeleteArgs} args - Arguments to delete one SysRole.
     * @example
     * // Delete one SysRole
     * const SysRole = await prisma.sysRole.delete({
     *   where: {
     *     // ... filter to delete one SysRole
     *   }
     * })
     * 
    **/
    delete<T extends SysRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleDeleteArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysRole.
     * @param {SysRoleUpdateArgs} args - Arguments to update one SysRole.
     * @example
     * // Update one SysRole
     * const sysRole = await prisma.sysRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleUpdateArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysRoles.
     * @param {SysRoleDeleteManyArgs} args - Arguments to filter SysRoles to delete.
     * @example
     * // Delete a few SysRoles
     * const { count } = await prisma.sysRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysRoles
     * const sysRole = await prisma.sysRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysRole.
     * @param {SysRoleUpsertArgs} args - Arguments to update or create a SysRole.
     * @example
     * // Update or create a SysRole
     * const sysRole = await prisma.sysRole.upsert({
     *   create: {
     *     // ... data to create a SysRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysRole we want to update
     *   }
     * })
    **/
    upsert<T extends SysRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysRoleUpsertArgs<ExtArgs>>
    ): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleCountArgs} args - Arguments to filter SysRoles to count.
     * @example
     * // Count the number of SysRoles
     * const count = await prisma.sysRole.count({
     *   where: {
     *     // ... the filter for the SysRoles we want to count
     *   }
     * })
    **/
    count<T extends SysRoleCountArgs>(
      args?: Subset<T, SysRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysRoleAggregateArgs>(args: Subset<T, SysRoleAggregateArgs>): Prisma.PrismaPromise<GetSysRoleAggregateType<T>>

    /**
     * Group by SysRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysRoleGroupByArgs['orderBy'] }
        : { orderBy?: SysRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysRole model
   */
  readonly fields: SysRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends SysRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, SysRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    menus<T extends SysRole$menusArgs<ExtArgs> = {}>(args?: Subset<T, SysRole$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRoleMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    depts<T extends SysRole$deptsArgs<ExtArgs> = {}>(args?: Subset<T, SysRole$deptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysRoleDeptPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysRole model
   */ 
  interface SysRoleFieldRefs {
    readonly roleId: FieldRef<"SysRole", 'Int'>
    readonly roleName: FieldRef<"SysRole", 'String'>
    readonly roleKey: FieldRef<"SysRole", 'String'>
    readonly roleSort: FieldRef<"SysRole", 'Int'>
    readonly dataScope: FieldRef<"SysRole", 'String'>
    readonly menuCheckStrictly: FieldRef<"SysRole", 'Int'>
    readonly deptCheckStrictly: FieldRef<"SysRole", 'Int'>
    readonly status: FieldRef<"SysRole", 'String'>
    readonly createBy: FieldRef<"SysRole", 'String'>
    readonly createTime: FieldRef<"SysRole", 'String'>
    readonly updateBy: FieldRef<"SysRole", 'String'>
    readonly updateTime: FieldRef<"SysRole", 'String'>
    readonly remark: FieldRef<"SysRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SysRole findUnique
   */
  export type SysRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysRole to fetch.
     */
    where: SysRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole findUniqueOrThrow
   */
  export type SysRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysRole to fetch.
     */
    where: SysRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole findFirst
   */
  export type SysRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysRole to fetch.
     */
    where?: SysRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoles to fetch.
     */
    orderBy?: SysRoleOrderByWithRelationInput | SysRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysRoles.
     */
    cursor?: SysRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysRoles.
     */
    distinct?: SysRoleScalarFieldEnum | SysRoleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole findFirstOrThrow
   */
  export type SysRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysRole to fetch.
     */
    where?: SysRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoles to fetch.
     */
    orderBy?: SysRoleOrderByWithRelationInput | SysRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysRoles.
     */
    cursor?: SysRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysRoles.
     */
    distinct?: SysRoleScalarFieldEnum | SysRoleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole findMany
   */
  export type SysRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysRoles to fetch.
     */
    where?: SysRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysRoles to fetch.
     */
    orderBy?: SysRoleOrderByWithRelationInput | SysRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysRoles.
     */
    cursor?: SysRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysRoles.
     */
    skip?: number
    distinct?: SysRoleScalarFieldEnum | SysRoleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole create
   */
  export type SysRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a SysRole.
     */
    data: XOR<SysRoleCreateInput, SysRoleUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole createMany
   */
  export type SysRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysRoles.
     */
    data: SysRoleCreateManyInput | SysRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysRole update
   */
  export type SysRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a SysRole.
     */
    data: XOR<SysRoleUpdateInput, SysRoleUncheckedUpdateInput>
    /**
     * Choose, which SysRole to update.
     */
    where: SysRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole updateMany
   */
  export type SysRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysRoles.
     */
    data: XOR<SysRoleUpdateManyMutationInput, SysRoleUncheckedUpdateManyInput>
    /**
     * Filter which SysRoles to update
     */
    where?: SysRoleWhereInput
  }

  /**
   * SysRole upsert
   */
  export type SysRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the SysRole to update in case it exists.
     */
    where: SysRoleWhereUniqueInput
    /**
     * In case the SysRole found by the `where` argument doesn't exist, create a new SysRole with this data.
     */
    create: XOR<SysRoleCreateInput, SysRoleUncheckedCreateInput>
    /**
     * In case the SysRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysRoleUpdateInput, SysRoleUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole delete
   */
  export type SysRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
    /**
     * Filter which SysRole to delete.
     */
    where: SysRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysRole deleteMany
   */
  export type SysRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysRoles to delete
     */
    where?: SysRoleWhereInput
  }

  /**
   * SysRole.users
   */
  export type SysRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    where?: SysUserRoleWhereInput
    orderBy?: SysUserRoleOrderByWithRelationInput | SysUserRoleOrderByWithRelationInput[]
    cursor?: SysUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysUserRoleScalarFieldEnum | SysUserRoleScalarFieldEnum[]
  }

  /**
   * SysRole.menus
   */
  export type SysRole$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleMenu
     */
    select?: SysRoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleMenu
     */
    omit?: SysRoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleMenuInclude<ExtArgs> | null
    where?: SysRoleMenuWhereInput
    orderBy?: SysRoleMenuOrderByWithRelationInput | SysRoleMenuOrderByWithRelationInput[]
    cursor?: SysRoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysRoleMenuScalarFieldEnum | SysRoleMenuScalarFieldEnum[]
  }

  /**
   * SysRole.depts
   */
  export type SysRole$deptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRoleDept
     */
    select?: SysRoleDeptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRoleDept
     */
    omit?: SysRoleDeptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleDeptInclude<ExtArgs> | null
    where?: SysRoleDeptWhereInput
    orderBy?: SysRoleDeptOrderByWithRelationInput | SysRoleDeptOrderByWithRelationInput[]
    cursor?: SysRoleDeptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SysRoleDeptScalarFieldEnum | SysRoleDeptScalarFieldEnum[]
  }

  /**
   * SysRole without action
   */
  export type SysRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysRole
     */
    select?: SysRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysRole
     */
    omit?: SysRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysRoleInclude<ExtArgs> | null
  }


  /**
   * Model SysUserRole
   */

  export type AggregateSysUserRole = {
    _count: SysUserRoleCountAggregateOutputType | null
    _avg: SysUserRoleAvgAggregateOutputType | null
    _sum: SysUserRoleSumAggregateOutputType | null
    _min: SysUserRoleMinAggregateOutputType | null
    _max: SysUserRoleMaxAggregateOutputType | null
  }

  export type SysUserRoleAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SysUserRoleSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SysUserRoleMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SysUserRoleMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SysUserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type SysUserRoleAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SysUserRoleSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SysUserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SysUserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SysUserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type SysUserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysUserRole to aggregate.
     */
    where?: SysUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserRoles to fetch.
     */
    orderBy?: SysUserRoleOrderByWithRelationInput | SysUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SysUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SysUserRoles
    **/
    _count?: true | SysUserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysUserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysUserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysUserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysUserRoleMaxAggregateInputType
  }

  export type GetSysUserRoleAggregateType<T extends SysUserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateSysUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysUserRole[P]>
      : GetScalarType<T[P], AggregateSysUserRole[P]>
  }




  export type SysUserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SysUserRoleWhereInput
    orderBy?: SysUserRoleOrderByWithAggregationInput | SysUserRoleOrderByWithAggregationInput[]
    by: SysUserRoleScalarFieldEnum[] | SysUserRoleScalarFieldEnum
    having?: SysUserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysUserRoleCountAggregateInputType | true
    _avg?: SysUserRoleAvgAggregateInputType
    _sum?: SysUserRoleSumAggregateInputType
    _min?: SysUserRoleMinAggregateInputType
    _max?: SysUserRoleMaxAggregateInputType
  }

  export type SysUserRoleGroupByOutputType = {
    userId: number
    roleId: number
    _count: SysUserRoleCountAggregateOutputType | null
    _avg: SysUserRoleAvgAggregateOutputType | null
    _sum: SysUserRoleSumAggregateOutputType | null
    _min: SysUserRoleMinAggregateOutputType | null
    _max: SysUserRoleMaxAggregateOutputType | null
  }

  type GetSysUserRoleGroupByPayload<T extends SysUserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysUserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysUserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysUserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], SysUserRoleGroupByOutputType[P]>
        }
      >
    >


  export type SysUserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | SysUserDefaultArgs<ExtArgs>
    role?: boolean | SysRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sysUserRole"]>


  export type SysUserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type SysUserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["sysUserRole"]>
  export type SysUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SysUserDefaultArgs<ExtArgs>
    role?: boolean | SysRoleDefaultArgs<ExtArgs>
  }

  export type $SysUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SysUserRole"
    objects: {
      user: Prisma.$SysUserPayload<ExtArgs>
      role: Prisma.$SysRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
    }, ExtArgs["result"]["sysUserRole"]>
    composites: {}
  }

  type SysUserRoleGetPayload<S extends boolean | null | undefined | SysUserRoleDefaultArgs> = $Result.GetResult<Prisma.$SysUserRolePayload, S>

  type SysUserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SysUserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SysUserRoleCountAggregateInputType | true
    }

  export interface SysUserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SysUserRole'], meta: { name: 'SysUserRole' } }
    /**
     * Find zero or one SysUserRole that matches the filter.
     * @param {SysUserRoleFindUniqueArgs} args - Arguments to find a SysUserRole
     * @example
     * // Get one SysUserRole
     * const sysUserRole = await prisma.sysUserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SysUserRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SysUserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SysUserRoleFindUniqueOrThrowArgs} args - Arguments to find a SysUserRole
     * @example
     * // Get one SysUserRole
     * const sysUserRole = await prisma.sysUserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SysUserRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SysUserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleFindFirstArgs} args - Arguments to find a SysUserRole
     * @example
     * // Get one SysUserRole
     * const sysUserRole = await prisma.sysUserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SysUserRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SysUserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleFindFirstOrThrowArgs} args - Arguments to find a SysUserRole
     * @example
     * // Get one SysUserRole
     * const sysUserRole = await prisma.sysUserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SysUserRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SysUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysUserRoles
     * const sysUserRoles = await prisma.sysUserRole.findMany()
     * 
     * // Get first 10 SysUserRoles
     * const sysUserRoles = await prisma.sysUserRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sysUserRoleWithUserIdOnly = await prisma.sysUserRole.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends SysUserRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SysUserRole.
     * @param {SysUserRoleCreateArgs} args - Arguments to create a SysUserRole.
     * @example
     * // Create one SysUserRole
     * const SysUserRole = await prisma.sysUserRole.create({
     *   data: {
     *     // ... data to create a SysUserRole
     *   }
     * })
     * 
    **/
    create<T extends SysUserRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserRoleCreateArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SysUserRoles.
     * @param {SysUserRoleCreateManyArgs} args - Arguments to create many SysUserRoles.
     * @example
     * // Create many SysUserRoles
     * const sysUserRole = await prisma.sysUserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SysUserRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysUserRole.
     * @param {SysUserRoleDeleteArgs} args - Arguments to delete one SysUserRole.
     * @example
     * // Delete one SysUserRole
     * const SysUserRole = await prisma.sysUserRole.delete({
     *   where: {
     *     // ... filter to delete one SysUserRole
     *   }
     * })
     * 
    **/
    delete<T extends SysUserRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserRoleDeleteArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SysUserRole.
     * @param {SysUserRoleUpdateArgs} args - Arguments to update one SysUserRole.
     * @example
     * // Update one SysUserRole
     * const sysUserRole = await prisma.sysUserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SysUserRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserRoleUpdateArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SysUserRoles.
     * @param {SysUserRoleDeleteManyArgs} args - Arguments to filter SysUserRoles to delete.
     * @example
     * // Delete a few SysUserRoles
     * const { count } = await prisma.sysUserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SysUserRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SysUserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysUserRoles
     * const sysUserRole = await prisma.sysUserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SysUserRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysUserRole.
     * @param {SysUserRoleUpsertArgs} args - Arguments to update or create a SysUserRole.
     * @example
     * // Update or create a SysUserRole
     * const sysUserRole = await prisma.sysUserRole.upsert({
     *   create: {
     *     // ... data to create a SysUserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysUserRole we want to update
     *   }
     * })
    **/
    upsert<T extends SysUserRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SysUserRoleUpsertArgs<ExtArgs>>
    ): Prisma__SysUserRoleClient<$Result.GetResult<Prisma.$SysUserRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SysUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleCountArgs} args - Arguments to filter SysUserRoles to count.
     * @example
     * // Count the number of SysUserRoles
     * const count = await prisma.sysUserRole.count({
     *   where: {
     *     // ... the filter for the SysUserRoles we want to count
     *   }
     * })
    **/
    count<T extends SysUserRoleCountArgs>(
      args?: Subset<T, SysUserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysUserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysUserRoleAggregateArgs>(args: Subset<T, SysUserRoleAggregateArgs>): Prisma.PrismaPromise<GetSysUserRoleAggregateType<T>>

    /**
     * Group by SysUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysUserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SysUserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SysUserRoleGroupByArgs['orderBy'] }
        : { orderBy?: SysUserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SysUserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SysUserRole model
   */
  readonly fields: SysUserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SysUserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SysUserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends SysUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysUserDefaultArgs<ExtArgs>>): Prisma__SysUserClient<$Result.GetResult<Prisma.$SysUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends SysRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SysRoleDefaultArgs<ExtArgs>>): Prisma__SysRoleClient<$Result.GetResult<Prisma.$SysRolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SysUserRole model
   */ 
  interface SysUserRoleFieldRefs {
    readonly userId: FieldRef<"SysUserRole", 'Int'>
    readonly roleId: FieldRef<"SysUserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SysUserRole findUnique
   */
  export type SysUserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysUserRole to fetch.
     */
    where: SysUserRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole findUniqueOrThrow
   */
  export type SysUserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysUserRole to fetch.
     */
    where: SysUserRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole findFirst
   */
  export type SysUserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysUserRole to fetch.
     */
    where?: SysUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserRoles to fetch.
     */
    orderBy?: SysUserRoleOrderByWithRelationInput | SysUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysUserRoles.
     */
    cursor?: SysUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysUserRoles.
     */
    distinct?: SysUserRoleScalarFieldEnum | SysUserRoleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole findFirstOrThrow
   */
  export type SysUserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysUserRole to fetch.
     */
    where?: SysUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserRoles to fetch.
     */
    orderBy?: SysUserRoleOrderByWithRelationInput | SysUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SysUserRoles.
     */
    cursor?: SysUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SysUserRoles.
     */
    distinct?: SysUserRoleScalarFieldEnum | SysUserRoleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole findMany
   */
  export type SysUserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SysUserRoles to fetch.
     */
    where?: SysUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SysUserRoles to fetch.
     */
    orderBy?: SysUserRoleOrderByWithRelationInput | SysUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SysUserRoles.
     */
    cursor?: SysUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SysUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SysUserRoles.
     */
    skip?: number
    distinct?: SysUserRoleScalarFieldEnum | SysUserRoleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole create
   */
  export type SysUserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a SysUserRole.
     */
    data: XOR<SysUserRoleCreateInput, SysUserRoleUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole createMany
   */
  export type SysUserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SysUserRoles.
     */
    data: SysUserRoleCreateManyInput | SysUserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SysUserRole update
   */
  export type SysUserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a SysUserRole.
     */
    data: XOR<SysUserRoleUpdateInput, SysUserRoleUncheckedUpdateInput>
    /**
     * Choose, which SysUserRole to update.
     */
    where: SysUserRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole updateMany
   */
  export type SysUserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SysUserRoles.
     */
    data: XOR<SysUserRoleUpdateManyMutationInput, SysUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which SysUserRoles to update
     */
    where?: SysUserRoleWhereInput
  }

  /**
   * SysUserRole upsert
   */
  export type SysUserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the SysUserRole to update in case it exists.
     */
    where: SysUserRoleWhereUniqueInput
    /**
     * In case the SysUserRole found by the `where` argument doesn't exist, create a new SysUserRole with this data.
     */
    create: XOR<SysUserRoleCreateInput, SysUserRoleUncheckedCreateInput>
    /**
     * In case the SysUserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SysUserRoleUpdateInput, SysUserRoleUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole delete
   */
  export type SysUserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
    /**
     * Filter which SysUserRole to delete.
     */
    where: SysUserRoleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SysUserRole deleteMany
   */
  export type SysUserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SysUserRoles to delete
     */
    where?: SysUserRoleWhereInput
  }

  /**
   * SysUserRole without action
   */
  export type SysUserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SysUserRole
     */
    select?: SysUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SysUserRole
     */
    omit?: SysUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SysUserRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GenTableScalarFieldEnum: {
    tableId: 'tableId',
    tableName: 'tableName',
    tableComment: 'tableComment',
    subTableName: 'subTableName',
    subTableFkName: 'subTableFkName',
    className: 'className',
    tplCategory: 'tplCategory',
    tplWebType: 'tplWebType',
    packageName: 'packageName',
    moduleName: 'moduleName',
    businessName: 'businessName',
    functionName: 'functionName',
    functionAuthor: 'functionAuthor',
    genType: 'genType',
    genPath: 'genPath',
    options: 'options',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type GenTableScalarFieldEnum = (typeof GenTableScalarFieldEnum)[keyof typeof GenTableScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const GenTableColumnScalarFieldEnum: {
    columnId: 'columnId',
    tableId: 'tableId',
    columnName: 'columnName',
    columnComment: 'columnComment',
    columnType: 'columnType',
    javaType: 'javaType',
    javaField: 'javaField',
    isPk: 'isPk',
    isIncrement: 'isIncrement',
    isRequired: 'isRequired',
    isInsert: 'isInsert',
    isEdit: 'isEdit',
    isList: 'isList',
    isQuery: 'isQuery',
    queryType: 'queryType',
    htmlType: 'htmlType',
    dictType: 'dictType',
    sort: 'sort',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime'
  };

  export type GenTableColumnScalarFieldEnum = (typeof GenTableColumnScalarFieldEnum)[keyof typeof GenTableColumnScalarFieldEnum]


  export const SysConfigScalarFieldEnum: {
    configId: 'configId',
    configName: 'configName',
    configKey: 'configKey',
    configValue: 'configValue',
    configType: 'configType',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysConfigScalarFieldEnum = (typeof SysConfigScalarFieldEnum)[keyof typeof SysConfigScalarFieldEnum]


  export const SysDeptScalarFieldEnum: {
    deptId: 'deptId',
    parentId: 'parentId',
    ancestors: 'ancestors',
    deptName: 'deptName',
    orderNum: 'orderNum',
    leader: 'leader',
    phone: 'phone',
    email: 'email',
    status: 'status',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime'
  };

  export type SysDeptScalarFieldEnum = (typeof SysDeptScalarFieldEnum)[keyof typeof SysDeptScalarFieldEnum]


  export const SysDictDataScalarFieldEnum: {
    dictCode: 'dictCode',
    dictSort: 'dictSort',
    dictLabel: 'dictLabel',
    dictValue: 'dictValue',
    dictType: 'dictType',
    cssClass: 'cssClass',
    listClass: 'listClass',
    isDefault: 'isDefault',
    status: 'status',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysDictDataScalarFieldEnum = (typeof SysDictDataScalarFieldEnum)[keyof typeof SysDictDataScalarFieldEnum]


  export const SysDictTypeScalarFieldEnum: {
    dictId: 'dictId',
    dictName: 'dictName',
    dictType: 'dictType',
    status: 'status',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysDictTypeScalarFieldEnum = (typeof SysDictTypeScalarFieldEnum)[keyof typeof SysDictTypeScalarFieldEnum]


  export const SysLogininforScalarFieldEnum: {
    infoId: 'infoId',
    userName: 'userName',
    ipaddr: 'ipaddr',
    loginLocation: 'loginLocation',
    browser: 'browser',
    os: 'os',
    status: 'status',
    msg: 'msg',
    loginTime: 'loginTime'
  };

  export type SysLogininforScalarFieldEnum = (typeof SysLogininforScalarFieldEnum)[keyof typeof SysLogininforScalarFieldEnum]


  export const SysMenuScalarFieldEnum: {
    menuId: 'menuId',
    menuName: 'menuName',
    parentId: 'parentId',
    orderNum: 'orderNum',
    path: 'path',
    component: 'component',
    query: 'query',
    isFrame: 'isFrame',
    isCache: 'isCache',
    menuType: 'menuType',
    visible: 'visible',
    status: 'status',
    perms: 'perms',
    icon: 'icon',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysMenuScalarFieldEnum = (typeof SysMenuScalarFieldEnum)[keyof typeof SysMenuScalarFieldEnum]


  export const SysNoticeScalarFieldEnum: {
    noticeId: 'noticeId',
    noticeTitle: 'noticeTitle',
    noticeType: 'noticeType',
    noticeContent: 'noticeContent',
    status: 'status',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysNoticeScalarFieldEnum = (typeof SysNoticeScalarFieldEnum)[keyof typeof SysNoticeScalarFieldEnum]


  export const SysPostScalarFieldEnum: {
    postId: 'postId',
    postCode: 'postCode',
    postName: 'postName',
    postSort: 'postSort',
    status: 'status',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysPostScalarFieldEnum = (typeof SysPostScalarFieldEnum)[keyof typeof SysPostScalarFieldEnum]


  export const SysUserPostScalarFieldEnum: {
    userId: 'userId',
    postId: 'postId'
  };

  export type SysUserPostScalarFieldEnum = (typeof SysUserPostScalarFieldEnum)[keyof typeof SysUserPostScalarFieldEnum]


  export const SysRoleDeptScalarFieldEnum: {
    roleId: 'roleId',
    deptId: 'deptId'
  };

  export type SysRoleDeptScalarFieldEnum = (typeof SysRoleDeptScalarFieldEnum)[keyof typeof SysRoleDeptScalarFieldEnum]


  export const SysRoleMenuScalarFieldEnum: {
    roleId: 'roleId',
    menuId: 'menuId'
  };

  export type SysRoleMenuScalarFieldEnum = (typeof SysRoleMenuScalarFieldEnum)[keyof typeof SysRoleMenuScalarFieldEnum]


  export const SysUserScalarFieldEnum: {
    userId: 'userId',
    deptId: 'deptId',
    userName: 'userName',
    nickName: 'nickName',
    userType: 'userType',
    email: 'email',
    phonenumber: 'phonenumber',
    sex: 'sex',
    avatar: 'avatar',
    password: 'password',
    status: 'status',
    loginIp: 'loginIp',
    loginDate: 'loginDate',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysUserScalarFieldEnum = (typeof SysUserScalarFieldEnum)[keyof typeof SysUserScalarFieldEnum]


  export const SysRoleScalarFieldEnum: {
    roleId: 'roleId',
    roleName: 'roleName',
    roleKey: 'roleKey',
    roleSort: 'roleSort',
    dataScope: 'dataScope',
    menuCheckStrictly: 'menuCheckStrictly',
    deptCheckStrictly: 'deptCheckStrictly',
    status: 'status',
    createBy: 'createBy',
    createTime: 'createTime',
    updateBy: 'updateBy',
    updateTime: 'updateTime',
    remark: 'remark'
  };

  export type SysRoleScalarFieldEnum = (typeof SysRoleScalarFieldEnum)[keyof typeof SysRoleScalarFieldEnum]


  export const SysUserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type SysUserRoleScalarFieldEnum = (typeof SysUserRoleScalarFieldEnum)[keyof typeof SysUserRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type GenTableWhereInput = {
    AND?: GenTableWhereInput | GenTableWhereInput[]
    OR?: GenTableWhereInput[]
    NOT?: GenTableWhereInput | GenTableWhereInput[]
    tableId?: IntFilter<"GenTable"> | number
    tableName?: StringNullableFilter<"GenTable"> | string | null
    tableComment?: StringNullableFilter<"GenTable"> | string | null
    subTableName?: StringNullableFilter<"GenTable"> | string | null
    subTableFkName?: StringNullableFilter<"GenTable"> | string | null
    className?: StringNullableFilter<"GenTable"> | string | null
    tplCategory?: StringNullableFilter<"GenTable"> | string | null
    tplWebType?: StringNullableFilter<"GenTable"> | string | null
    packageName?: StringNullableFilter<"GenTable"> | string | null
    moduleName?: StringNullableFilter<"GenTable"> | string | null
    businessName?: StringNullableFilter<"GenTable"> | string | null
    functionName?: StringNullableFilter<"GenTable"> | string | null
    functionAuthor?: StringNullableFilter<"GenTable"> | string | null
    genType?: StringNullableFilter<"GenTable"> | string | null
    genPath?: StringNullableFilter<"GenTable"> | string | null
    options?: StringNullableFilter<"GenTable"> | string | null
    createBy?: StringNullableFilter<"GenTable"> | string | null
    createTime?: StringNullableFilter<"GenTable"> | string | null
    updateBy?: StringNullableFilter<"GenTable"> | string | null
    updateTime?: StringNullableFilter<"GenTable"> | string | null
    remark?: StringNullableFilter<"GenTable"> | string | null
    tableColumns?: GenTableColumnListRelationFilter
  }

  export type GenTableOrderByWithRelationInput = {
    tableId?: SortOrder
    tableName?: SortOrderInput | SortOrder
    tableComment?: SortOrderInput | SortOrder
    subTableName?: SortOrderInput | SortOrder
    subTableFkName?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    tplCategory?: SortOrderInput | SortOrder
    tplWebType?: SortOrderInput | SortOrder
    packageName?: SortOrderInput | SortOrder
    moduleName?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    functionName?: SortOrderInput | SortOrder
    functionAuthor?: SortOrderInput | SortOrder
    genType?: SortOrderInput | SortOrder
    genPath?: SortOrderInput | SortOrder
    options?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    tableColumns?: GenTableColumnOrderByRelationAggregateInput
  }

  export type GenTableWhereUniqueInput = Prisma.AtLeast<{
    tableId?: number
    AND?: GenTableWhereInput | GenTableWhereInput[]
    OR?: GenTableWhereInput[]
    NOT?: GenTableWhereInput | GenTableWhereInput[]
    tableName?: StringNullableFilter<"GenTable"> | string | null
    tableComment?: StringNullableFilter<"GenTable"> | string | null
    subTableName?: StringNullableFilter<"GenTable"> | string | null
    subTableFkName?: StringNullableFilter<"GenTable"> | string | null
    className?: StringNullableFilter<"GenTable"> | string | null
    tplCategory?: StringNullableFilter<"GenTable"> | string | null
    tplWebType?: StringNullableFilter<"GenTable"> | string | null
    packageName?: StringNullableFilter<"GenTable"> | string | null
    moduleName?: StringNullableFilter<"GenTable"> | string | null
    businessName?: StringNullableFilter<"GenTable"> | string | null
    functionName?: StringNullableFilter<"GenTable"> | string | null
    functionAuthor?: StringNullableFilter<"GenTable"> | string | null
    genType?: StringNullableFilter<"GenTable"> | string | null
    genPath?: StringNullableFilter<"GenTable"> | string | null
    options?: StringNullableFilter<"GenTable"> | string | null
    createBy?: StringNullableFilter<"GenTable"> | string | null
    createTime?: StringNullableFilter<"GenTable"> | string | null
    updateBy?: StringNullableFilter<"GenTable"> | string | null
    updateTime?: StringNullableFilter<"GenTable"> | string | null
    remark?: StringNullableFilter<"GenTable"> | string | null
    tableColumns?: GenTableColumnListRelationFilter
  }, "tableId">

  export type GenTableOrderByWithAggregationInput = {
    tableId?: SortOrder
    tableName?: SortOrderInput | SortOrder
    tableComment?: SortOrderInput | SortOrder
    subTableName?: SortOrderInput | SortOrder
    subTableFkName?: SortOrderInput | SortOrder
    className?: SortOrderInput | SortOrder
    tplCategory?: SortOrderInput | SortOrder
    tplWebType?: SortOrderInput | SortOrder
    packageName?: SortOrderInput | SortOrder
    moduleName?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    functionName?: SortOrderInput | SortOrder
    functionAuthor?: SortOrderInput | SortOrder
    genType?: SortOrderInput | SortOrder
    genPath?: SortOrderInput | SortOrder
    options?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: GenTableCountOrderByAggregateInput
    _avg?: GenTableAvgOrderByAggregateInput
    _max?: GenTableMaxOrderByAggregateInput
    _min?: GenTableMinOrderByAggregateInput
    _sum?: GenTableSumOrderByAggregateInput
  }

  export type GenTableScalarWhereWithAggregatesInput = {
    AND?: GenTableScalarWhereWithAggregatesInput | GenTableScalarWhereWithAggregatesInput[]
    OR?: GenTableScalarWhereWithAggregatesInput[]
    NOT?: GenTableScalarWhereWithAggregatesInput | GenTableScalarWhereWithAggregatesInput[]
    tableId?: IntWithAggregatesFilter<"GenTable"> | number
    tableName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    tableComment?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    subTableName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    subTableFkName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    className?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    tplCategory?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    tplWebType?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    packageName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    moduleName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    businessName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    functionName?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    functionAuthor?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    genType?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    genPath?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    options?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
    remark?: StringNullableWithAggregatesFilter<"GenTable"> | string | null
  }

  export type GenTableColumnWhereInput = {
    AND?: GenTableColumnWhereInput | GenTableColumnWhereInput[]
    OR?: GenTableColumnWhereInput[]
    NOT?: GenTableColumnWhereInput | GenTableColumnWhereInput[]
    columnId?: IntFilter<"GenTableColumn"> | number
    tableId?: IntNullableFilter<"GenTableColumn"> | number | null
    columnName?: StringNullableFilter<"GenTableColumn"> | string | null
    columnComment?: StringNullableFilter<"GenTableColumn"> | string | null
    columnType?: StringNullableFilter<"GenTableColumn"> | string | null
    javaType?: StringNullableFilter<"GenTableColumn"> | string | null
    javaField?: StringNullableFilter<"GenTableColumn"> | string | null
    isPk?: StringNullableFilter<"GenTableColumn"> | string | null
    isIncrement?: StringNullableFilter<"GenTableColumn"> | string | null
    isRequired?: StringNullableFilter<"GenTableColumn"> | string | null
    isInsert?: StringNullableFilter<"GenTableColumn"> | string | null
    isEdit?: StringNullableFilter<"GenTableColumn"> | string | null
    isList?: StringNullableFilter<"GenTableColumn"> | string | null
    isQuery?: StringNullableFilter<"GenTableColumn"> | string | null
    queryType?: StringNullableFilter<"GenTableColumn"> | string | null
    htmlType?: StringNullableFilter<"GenTableColumn"> | string | null
    dictType?: StringNullableFilter<"GenTableColumn"> | string | null
    sort?: IntNullableFilter<"GenTableColumn"> | number | null
    createBy?: StringNullableFilter<"GenTableColumn"> | string | null
    createTime?: StringNullableFilter<"GenTableColumn"> | string | null
    updateBy?: StringNullableFilter<"GenTableColumn"> | string | null
    updateTime?: StringNullableFilter<"GenTableColumn"> | string | null
    table?: XOR<GenTableNullableRelationFilter, GenTableWhereInput> | null
  }

  export type GenTableColumnOrderByWithRelationInput = {
    columnId?: SortOrder
    tableId?: SortOrderInput | SortOrder
    columnName?: SortOrderInput | SortOrder
    columnComment?: SortOrderInput | SortOrder
    columnType?: SortOrderInput | SortOrder
    javaType?: SortOrderInput | SortOrder
    javaField?: SortOrderInput | SortOrder
    isPk?: SortOrderInput | SortOrder
    isIncrement?: SortOrderInput | SortOrder
    isRequired?: SortOrderInput | SortOrder
    isInsert?: SortOrderInput | SortOrder
    isEdit?: SortOrderInput | SortOrder
    isList?: SortOrderInput | SortOrder
    isQuery?: SortOrderInput | SortOrder
    queryType?: SortOrderInput | SortOrder
    htmlType?: SortOrderInput | SortOrder
    dictType?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    table?: GenTableOrderByWithRelationInput
  }

  export type GenTableColumnWhereUniqueInput = Prisma.AtLeast<{
    columnId?: number
    AND?: GenTableColumnWhereInput | GenTableColumnWhereInput[]
    OR?: GenTableColumnWhereInput[]
    NOT?: GenTableColumnWhereInput | GenTableColumnWhereInput[]
    tableId?: IntNullableFilter<"GenTableColumn"> | number | null
    columnName?: StringNullableFilter<"GenTableColumn"> | string | null
    columnComment?: StringNullableFilter<"GenTableColumn"> | string | null
    columnType?: StringNullableFilter<"GenTableColumn"> | string | null
    javaType?: StringNullableFilter<"GenTableColumn"> | string | null
    javaField?: StringNullableFilter<"GenTableColumn"> | string | null
    isPk?: StringNullableFilter<"GenTableColumn"> | string | null
    isIncrement?: StringNullableFilter<"GenTableColumn"> | string | null
    isRequired?: StringNullableFilter<"GenTableColumn"> | string | null
    isInsert?: StringNullableFilter<"GenTableColumn"> | string | null
    isEdit?: StringNullableFilter<"GenTableColumn"> | string | null
    isList?: StringNullableFilter<"GenTableColumn"> | string | null
    isQuery?: StringNullableFilter<"GenTableColumn"> | string | null
    queryType?: StringNullableFilter<"GenTableColumn"> | string | null
    htmlType?: StringNullableFilter<"GenTableColumn"> | string | null
    dictType?: StringNullableFilter<"GenTableColumn"> | string | null
    sort?: IntNullableFilter<"GenTableColumn"> | number | null
    createBy?: StringNullableFilter<"GenTableColumn"> | string | null
    createTime?: StringNullableFilter<"GenTableColumn"> | string | null
    updateBy?: StringNullableFilter<"GenTableColumn"> | string | null
    updateTime?: StringNullableFilter<"GenTableColumn"> | string | null
    table?: XOR<GenTableNullableRelationFilter, GenTableWhereInput> | null
  }, "columnId">

  export type GenTableColumnOrderByWithAggregationInput = {
    columnId?: SortOrder
    tableId?: SortOrderInput | SortOrder
    columnName?: SortOrderInput | SortOrder
    columnComment?: SortOrderInput | SortOrder
    columnType?: SortOrderInput | SortOrder
    javaType?: SortOrderInput | SortOrder
    javaField?: SortOrderInput | SortOrder
    isPk?: SortOrderInput | SortOrder
    isIncrement?: SortOrderInput | SortOrder
    isRequired?: SortOrderInput | SortOrder
    isInsert?: SortOrderInput | SortOrder
    isEdit?: SortOrderInput | SortOrder
    isList?: SortOrderInput | SortOrder
    isQuery?: SortOrderInput | SortOrder
    queryType?: SortOrderInput | SortOrder
    htmlType?: SortOrderInput | SortOrder
    dictType?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    _count?: GenTableColumnCountOrderByAggregateInput
    _avg?: GenTableColumnAvgOrderByAggregateInput
    _max?: GenTableColumnMaxOrderByAggregateInput
    _min?: GenTableColumnMinOrderByAggregateInput
    _sum?: GenTableColumnSumOrderByAggregateInput
  }

  export type GenTableColumnScalarWhereWithAggregatesInput = {
    AND?: GenTableColumnScalarWhereWithAggregatesInput | GenTableColumnScalarWhereWithAggregatesInput[]
    OR?: GenTableColumnScalarWhereWithAggregatesInput[]
    NOT?: GenTableColumnScalarWhereWithAggregatesInput | GenTableColumnScalarWhereWithAggregatesInput[]
    columnId?: IntWithAggregatesFilter<"GenTableColumn"> | number
    tableId?: IntNullableWithAggregatesFilter<"GenTableColumn"> | number | null
    columnName?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    columnComment?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    columnType?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    javaType?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    javaField?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isPk?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isIncrement?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isRequired?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isInsert?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isEdit?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isList?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    isQuery?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    queryType?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    htmlType?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    dictType?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    sort?: IntNullableWithAggregatesFilter<"GenTableColumn"> | number | null
    createBy?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"GenTableColumn"> | string | null
  }

  export type SysConfigWhereInput = {
    AND?: SysConfigWhereInput | SysConfigWhereInput[]
    OR?: SysConfigWhereInput[]
    NOT?: SysConfigWhereInput | SysConfigWhereInput[]
    configId?: IntFilter<"SysConfig"> | number
    configName?: StringNullableFilter<"SysConfig"> | string | null
    configKey?: StringNullableFilter<"SysConfig"> | string | null
    configValue?: StringNullableFilter<"SysConfig"> | string | null
    configType?: StringNullableFilter<"SysConfig"> | string | null
    createBy?: StringNullableFilter<"SysConfig"> | string | null
    createTime?: StringNullableFilter<"SysConfig"> | string | null
    updateBy?: StringNullableFilter<"SysConfig"> | string | null
    updateTime?: StringNullableFilter<"SysConfig"> | string | null
    remark?: StringNullableFilter<"SysConfig"> | string | null
  }

  export type SysConfigOrderByWithRelationInput = {
    configId?: SortOrder
    configName?: SortOrderInput | SortOrder
    configKey?: SortOrderInput | SortOrder
    configValue?: SortOrderInput | SortOrder
    configType?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
  }

  export type SysConfigWhereUniqueInput = Prisma.AtLeast<{
    configId?: number
    AND?: SysConfigWhereInput | SysConfigWhereInput[]
    OR?: SysConfigWhereInput[]
    NOT?: SysConfigWhereInput | SysConfigWhereInput[]
    configName?: StringNullableFilter<"SysConfig"> | string | null
    configKey?: StringNullableFilter<"SysConfig"> | string | null
    configValue?: StringNullableFilter<"SysConfig"> | string | null
    configType?: StringNullableFilter<"SysConfig"> | string | null
    createBy?: StringNullableFilter<"SysConfig"> | string | null
    createTime?: StringNullableFilter<"SysConfig"> | string | null
    updateBy?: StringNullableFilter<"SysConfig"> | string | null
    updateTime?: StringNullableFilter<"SysConfig"> | string | null
    remark?: StringNullableFilter<"SysConfig"> | string | null
  }, "configId">

  export type SysConfigOrderByWithAggregationInput = {
    configId?: SortOrder
    configName?: SortOrderInput | SortOrder
    configKey?: SortOrderInput | SortOrder
    configValue?: SortOrderInput | SortOrder
    configType?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysConfigCountOrderByAggregateInput
    _avg?: SysConfigAvgOrderByAggregateInput
    _max?: SysConfigMaxOrderByAggregateInput
    _min?: SysConfigMinOrderByAggregateInput
    _sum?: SysConfigSumOrderByAggregateInput
  }

  export type SysConfigScalarWhereWithAggregatesInput = {
    AND?: SysConfigScalarWhereWithAggregatesInput | SysConfigScalarWhereWithAggregatesInput[]
    OR?: SysConfigScalarWhereWithAggregatesInput[]
    NOT?: SysConfigScalarWhereWithAggregatesInput | SysConfigScalarWhereWithAggregatesInput[]
    configId?: IntWithAggregatesFilter<"SysConfig"> | number
    configName?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    configKey?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    configValue?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    configType?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysConfig"> | string | null
  }

  export type SysDeptWhereInput = {
    AND?: SysDeptWhereInput | SysDeptWhereInput[]
    OR?: SysDeptWhereInput[]
    NOT?: SysDeptWhereInput | SysDeptWhereInput[]
    deptId?: IntFilter<"SysDept"> | number
    parentId?: IntNullableFilter<"SysDept"> | number | null
    ancestors?: StringNullableFilter<"SysDept"> | string | null
    deptName?: StringNullableFilter<"SysDept"> | string | null
    orderNum?: IntNullableFilter<"SysDept"> | number | null
    leader?: StringNullableFilter<"SysDept"> | string | null
    phone?: StringNullableFilter<"SysDept"> | string | null
    email?: StringNullableFilter<"SysDept"> | string | null
    status?: StringNullableFilter<"SysDept"> | string | null
    createBy?: StringNullableFilter<"SysDept"> | string | null
    createTime?: StringNullableFilter<"SysDept"> | string | null
    updateBy?: StringNullableFilter<"SysDept"> | string | null
    updateTime?: StringNullableFilter<"SysDept"> | string | null
    users?: SysUserListRelationFilter
    roles?: SysRoleDeptListRelationFilter
  }

  export type SysDeptOrderByWithRelationInput = {
    deptId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    ancestors?: SortOrderInput | SortOrder
    deptName?: SortOrderInput | SortOrder
    orderNum?: SortOrderInput | SortOrder
    leader?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    users?: SysUserOrderByRelationAggregateInput
    roles?: SysRoleDeptOrderByRelationAggregateInput
  }

  export type SysDeptWhereUniqueInput = Prisma.AtLeast<{
    deptId?: number
    AND?: SysDeptWhereInput | SysDeptWhereInput[]
    OR?: SysDeptWhereInput[]
    NOT?: SysDeptWhereInput | SysDeptWhereInput[]
    parentId?: IntNullableFilter<"SysDept"> | number | null
    ancestors?: StringNullableFilter<"SysDept"> | string | null
    deptName?: StringNullableFilter<"SysDept"> | string | null
    orderNum?: IntNullableFilter<"SysDept"> | number | null
    leader?: StringNullableFilter<"SysDept"> | string | null
    phone?: StringNullableFilter<"SysDept"> | string | null
    email?: StringNullableFilter<"SysDept"> | string | null
    status?: StringNullableFilter<"SysDept"> | string | null
    createBy?: StringNullableFilter<"SysDept"> | string | null
    createTime?: StringNullableFilter<"SysDept"> | string | null
    updateBy?: StringNullableFilter<"SysDept"> | string | null
    updateTime?: StringNullableFilter<"SysDept"> | string | null
    users?: SysUserListRelationFilter
    roles?: SysRoleDeptListRelationFilter
  }, "deptId">

  export type SysDeptOrderByWithAggregationInput = {
    deptId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    ancestors?: SortOrderInput | SortOrder
    deptName?: SortOrderInput | SortOrder
    orderNum?: SortOrderInput | SortOrder
    leader?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    _count?: SysDeptCountOrderByAggregateInput
    _avg?: SysDeptAvgOrderByAggregateInput
    _max?: SysDeptMaxOrderByAggregateInput
    _min?: SysDeptMinOrderByAggregateInput
    _sum?: SysDeptSumOrderByAggregateInput
  }

  export type SysDeptScalarWhereWithAggregatesInput = {
    AND?: SysDeptScalarWhereWithAggregatesInput | SysDeptScalarWhereWithAggregatesInput[]
    OR?: SysDeptScalarWhereWithAggregatesInput[]
    NOT?: SysDeptScalarWhereWithAggregatesInput | SysDeptScalarWhereWithAggregatesInput[]
    deptId?: IntWithAggregatesFilter<"SysDept"> | number
    parentId?: IntNullableWithAggregatesFilter<"SysDept"> | number | null
    ancestors?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    deptName?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    orderNum?: IntNullableWithAggregatesFilter<"SysDept"> | number | null
    leader?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    email?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysDept"> | string | null
  }

  export type SysDictDataWhereInput = {
    AND?: SysDictDataWhereInput | SysDictDataWhereInput[]
    OR?: SysDictDataWhereInput[]
    NOT?: SysDictDataWhereInput | SysDictDataWhereInput[]
    dictCode?: IntFilter<"SysDictData"> | number
    dictSort?: IntNullableFilter<"SysDictData"> | number | null
    dictLabel?: StringNullableFilter<"SysDictData"> | string | null
    dictValue?: StringNullableFilter<"SysDictData"> | string | null
    dictType?: StringNullableFilter<"SysDictData"> | string | null
    cssClass?: StringNullableFilter<"SysDictData"> | string | null
    listClass?: StringNullableFilter<"SysDictData"> | string | null
    isDefault?: StringNullableFilter<"SysDictData"> | string | null
    status?: StringNullableFilter<"SysDictData"> | string | null
    createBy?: StringNullableFilter<"SysDictData"> | string | null
    createTime?: StringNullableFilter<"SysDictData"> | string | null
    updateBy?: StringNullableFilter<"SysDictData"> | string | null
    updateTime?: StringNullableFilter<"SysDictData"> | string | null
    remark?: StringNullableFilter<"SysDictData"> | string | null
    sysDictType?: XOR<SysDictTypeNullableRelationFilter, SysDictTypeWhereInput> | null
  }

  export type SysDictDataOrderByWithRelationInput = {
    dictCode?: SortOrder
    dictSort?: SortOrderInput | SortOrder
    dictLabel?: SortOrderInput | SortOrder
    dictValue?: SortOrderInput | SortOrder
    dictType?: SortOrderInput | SortOrder
    cssClass?: SortOrderInput | SortOrder
    listClass?: SortOrderInput | SortOrder
    isDefault?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    sysDictType?: SysDictTypeOrderByWithRelationInput
  }

  export type SysDictDataWhereUniqueInput = Prisma.AtLeast<{
    dictCode?: number
    AND?: SysDictDataWhereInput | SysDictDataWhereInput[]
    OR?: SysDictDataWhereInput[]
    NOT?: SysDictDataWhereInput | SysDictDataWhereInput[]
    dictSort?: IntNullableFilter<"SysDictData"> | number | null
    dictLabel?: StringNullableFilter<"SysDictData"> | string | null
    dictValue?: StringNullableFilter<"SysDictData"> | string | null
    dictType?: StringNullableFilter<"SysDictData"> | string | null
    cssClass?: StringNullableFilter<"SysDictData"> | string | null
    listClass?: StringNullableFilter<"SysDictData"> | string | null
    isDefault?: StringNullableFilter<"SysDictData"> | string | null
    status?: StringNullableFilter<"SysDictData"> | string | null
    createBy?: StringNullableFilter<"SysDictData"> | string | null
    createTime?: StringNullableFilter<"SysDictData"> | string | null
    updateBy?: StringNullableFilter<"SysDictData"> | string | null
    updateTime?: StringNullableFilter<"SysDictData"> | string | null
    remark?: StringNullableFilter<"SysDictData"> | string | null
    sysDictType?: XOR<SysDictTypeNullableRelationFilter, SysDictTypeWhereInput> | null
  }, "dictCode">

  export type SysDictDataOrderByWithAggregationInput = {
    dictCode?: SortOrder
    dictSort?: SortOrderInput | SortOrder
    dictLabel?: SortOrderInput | SortOrder
    dictValue?: SortOrderInput | SortOrder
    dictType?: SortOrderInput | SortOrder
    cssClass?: SortOrderInput | SortOrder
    listClass?: SortOrderInput | SortOrder
    isDefault?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysDictDataCountOrderByAggregateInput
    _avg?: SysDictDataAvgOrderByAggregateInput
    _max?: SysDictDataMaxOrderByAggregateInput
    _min?: SysDictDataMinOrderByAggregateInput
    _sum?: SysDictDataSumOrderByAggregateInput
  }

  export type SysDictDataScalarWhereWithAggregatesInput = {
    AND?: SysDictDataScalarWhereWithAggregatesInput | SysDictDataScalarWhereWithAggregatesInput[]
    OR?: SysDictDataScalarWhereWithAggregatesInput[]
    NOT?: SysDictDataScalarWhereWithAggregatesInput | SysDictDataScalarWhereWithAggregatesInput[]
    dictCode?: IntWithAggregatesFilter<"SysDictData"> | number
    dictSort?: IntNullableWithAggregatesFilter<"SysDictData"> | number | null
    dictLabel?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    dictValue?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    dictType?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    cssClass?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    listClass?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    isDefault?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysDictData"> | string | null
  }

  export type SysDictTypeWhereInput = {
    AND?: SysDictTypeWhereInput | SysDictTypeWhereInput[]
    OR?: SysDictTypeWhereInput[]
    NOT?: SysDictTypeWhereInput | SysDictTypeWhereInput[]
    dictId?: IntFilter<"SysDictType"> | number
    dictName?: StringNullableFilter<"SysDictType"> | string | null
    dictType?: StringNullableFilter<"SysDictType"> | string | null
    status?: StringNullableFilter<"SysDictType"> | string | null
    createBy?: StringNullableFilter<"SysDictType"> | string | null
    createTime?: StringNullableFilter<"SysDictType"> | string | null
    updateBy?: StringNullableFilter<"SysDictType"> | string | null
    updateTime?: StringNullableFilter<"SysDictType"> | string | null
    remark?: StringNullableFilter<"SysDictType"> | string | null
    dictDatas?: SysDictDataListRelationFilter
  }

  export type SysDictTypeOrderByWithRelationInput = {
    dictId?: SortOrder
    dictName?: SortOrderInput | SortOrder
    dictType?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    dictDatas?: SysDictDataOrderByRelationAggregateInput
  }

  export type SysDictTypeWhereUniqueInput = Prisma.AtLeast<{
    dictId?: number
    dictType?: string
    AND?: SysDictTypeWhereInput | SysDictTypeWhereInput[]
    OR?: SysDictTypeWhereInput[]
    NOT?: SysDictTypeWhereInput | SysDictTypeWhereInput[]
    dictName?: StringNullableFilter<"SysDictType"> | string | null
    status?: StringNullableFilter<"SysDictType"> | string | null
    createBy?: StringNullableFilter<"SysDictType"> | string | null
    createTime?: StringNullableFilter<"SysDictType"> | string | null
    updateBy?: StringNullableFilter<"SysDictType"> | string | null
    updateTime?: StringNullableFilter<"SysDictType"> | string | null
    remark?: StringNullableFilter<"SysDictType"> | string | null
    dictDatas?: SysDictDataListRelationFilter
  }, "dictId" | "dictType">

  export type SysDictTypeOrderByWithAggregationInput = {
    dictId?: SortOrder
    dictName?: SortOrderInput | SortOrder
    dictType?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysDictTypeCountOrderByAggregateInput
    _avg?: SysDictTypeAvgOrderByAggregateInput
    _max?: SysDictTypeMaxOrderByAggregateInput
    _min?: SysDictTypeMinOrderByAggregateInput
    _sum?: SysDictTypeSumOrderByAggregateInput
  }

  export type SysDictTypeScalarWhereWithAggregatesInput = {
    AND?: SysDictTypeScalarWhereWithAggregatesInput | SysDictTypeScalarWhereWithAggregatesInput[]
    OR?: SysDictTypeScalarWhereWithAggregatesInput[]
    NOT?: SysDictTypeScalarWhereWithAggregatesInput | SysDictTypeScalarWhereWithAggregatesInput[]
    dictId?: IntWithAggregatesFilter<"SysDictType"> | number
    dictName?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    dictType?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysDictType"> | string | null
  }

  export type SysLogininforWhereInput = {
    AND?: SysLogininforWhereInput | SysLogininforWhereInput[]
    OR?: SysLogininforWhereInput[]
    NOT?: SysLogininforWhereInput | SysLogininforWhereInput[]
    infoId?: IntFilter<"SysLogininfor"> | number
    userName?: StringNullableFilter<"SysLogininfor"> | string | null
    ipaddr?: StringNullableFilter<"SysLogininfor"> | string | null
    loginLocation?: StringNullableFilter<"SysLogininfor"> | string | null
    browser?: StringNullableFilter<"SysLogininfor"> | string | null
    os?: StringNullableFilter<"SysLogininfor"> | string | null
    status?: StringNullableFilter<"SysLogininfor"> | string | null
    msg?: StringNullableFilter<"SysLogininfor"> | string | null
    loginTime?: StringNullableFilter<"SysLogininfor"> | string | null
  }

  export type SysLogininforOrderByWithRelationInput = {
    infoId?: SortOrder
    userName?: SortOrderInput | SortOrder
    ipaddr?: SortOrderInput | SortOrder
    loginLocation?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    msg?: SortOrderInput | SortOrder
    loginTime?: SortOrderInput | SortOrder
  }

  export type SysLogininforWhereUniqueInput = Prisma.AtLeast<{
    infoId?: number
    AND?: SysLogininforWhereInput | SysLogininforWhereInput[]
    OR?: SysLogininforWhereInput[]
    NOT?: SysLogininforWhereInput | SysLogininforWhereInput[]
    userName?: StringNullableFilter<"SysLogininfor"> | string | null
    ipaddr?: StringNullableFilter<"SysLogininfor"> | string | null
    loginLocation?: StringNullableFilter<"SysLogininfor"> | string | null
    browser?: StringNullableFilter<"SysLogininfor"> | string | null
    os?: StringNullableFilter<"SysLogininfor"> | string | null
    status?: StringNullableFilter<"SysLogininfor"> | string | null
    msg?: StringNullableFilter<"SysLogininfor"> | string | null
    loginTime?: StringNullableFilter<"SysLogininfor"> | string | null
  }, "infoId">

  export type SysLogininforOrderByWithAggregationInput = {
    infoId?: SortOrder
    userName?: SortOrderInput | SortOrder
    ipaddr?: SortOrderInput | SortOrder
    loginLocation?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    msg?: SortOrderInput | SortOrder
    loginTime?: SortOrderInput | SortOrder
    _count?: SysLogininforCountOrderByAggregateInput
    _avg?: SysLogininforAvgOrderByAggregateInput
    _max?: SysLogininforMaxOrderByAggregateInput
    _min?: SysLogininforMinOrderByAggregateInput
    _sum?: SysLogininforSumOrderByAggregateInput
  }

  export type SysLogininforScalarWhereWithAggregatesInput = {
    AND?: SysLogininforScalarWhereWithAggregatesInput | SysLogininforScalarWhereWithAggregatesInput[]
    OR?: SysLogininforScalarWhereWithAggregatesInput[]
    NOT?: SysLogininforScalarWhereWithAggregatesInput | SysLogininforScalarWhereWithAggregatesInput[]
    infoId?: IntWithAggregatesFilter<"SysLogininfor"> | number
    userName?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    ipaddr?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    loginLocation?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    browser?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    os?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    msg?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
    loginTime?: StringNullableWithAggregatesFilter<"SysLogininfor"> | string | null
  }

  export type SysMenuWhereInput = {
    AND?: SysMenuWhereInput | SysMenuWhereInput[]
    OR?: SysMenuWhereInput[]
    NOT?: SysMenuWhereInput | SysMenuWhereInput[]
    menuId?: IntFilter<"SysMenu"> | number
    menuName?: StringFilter<"SysMenu"> | string
    parentId?: IntNullableFilter<"SysMenu"> | number | null
    orderNum?: IntNullableFilter<"SysMenu"> | number | null
    path?: StringNullableFilter<"SysMenu"> | string | null
    component?: StringNullableFilter<"SysMenu"> | string | null
    query?: StringNullableFilter<"SysMenu"> | string | null
    isFrame?: IntNullableFilter<"SysMenu"> | number | null
    isCache?: IntNullableFilter<"SysMenu"> | number | null
    menuType?: StringNullableFilter<"SysMenu"> | string | null
    visible?: StringNullableFilter<"SysMenu"> | string | null
    status?: StringNullableFilter<"SysMenu"> | string | null
    perms?: StringNullableFilter<"SysMenu"> | string | null
    icon?: StringNullableFilter<"SysMenu"> | string | null
    createBy?: StringNullableFilter<"SysMenu"> | string | null
    createTime?: StringNullableFilter<"SysMenu"> | string | null
    updateBy?: StringNullableFilter<"SysMenu"> | string | null
    updateTime?: StringNullableFilter<"SysMenu"> | string | null
    remark?: StringNullableFilter<"SysMenu"> | string | null
    roles?: SysRoleMenuListRelationFilter
  }

  export type SysMenuOrderByWithRelationInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    parentId?: SortOrderInput | SortOrder
    orderNum?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    component?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    isFrame?: SortOrderInput | SortOrder
    isCache?: SortOrderInput | SortOrder
    menuType?: SortOrderInput | SortOrder
    visible?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    perms?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    roles?: SysRoleMenuOrderByRelationAggregateInput
  }

  export type SysMenuWhereUniqueInput = Prisma.AtLeast<{
    menuId?: number
    AND?: SysMenuWhereInput | SysMenuWhereInput[]
    OR?: SysMenuWhereInput[]
    NOT?: SysMenuWhereInput | SysMenuWhereInput[]
    menuName?: StringFilter<"SysMenu"> | string
    parentId?: IntNullableFilter<"SysMenu"> | number | null
    orderNum?: IntNullableFilter<"SysMenu"> | number | null
    path?: StringNullableFilter<"SysMenu"> | string | null
    component?: StringNullableFilter<"SysMenu"> | string | null
    query?: StringNullableFilter<"SysMenu"> | string | null
    isFrame?: IntNullableFilter<"SysMenu"> | number | null
    isCache?: IntNullableFilter<"SysMenu"> | number | null
    menuType?: StringNullableFilter<"SysMenu"> | string | null
    visible?: StringNullableFilter<"SysMenu"> | string | null
    status?: StringNullableFilter<"SysMenu"> | string | null
    perms?: StringNullableFilter<"SysMenu"> | string | null
    icon?: StringNullableFilter<"SysMenu"> | string | null
    createBy?: StringNullableFilter<"SysMenu"> | string | null
    createTime?: StringNullableFilter<"SysMenu"> | string | null
    updateBy?: StringNullableFilter<"SysMenu"> | string | null
    updateTime?: StringNullableFilter<"SysMenu"> | string | null
    remark?: StringNullableFilter<"SysMenu"> | string | null
    roles?: SysRoleMenuListRelationFilter
  }, "menuId">

  export type SysMenuOrderByWithAggregationInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    parentId?: SortOrderInput | SortOrder
    orderNum?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    component?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    isFrame?: SortOrderInput | SortOrder
    isCache?: SortOrderInput | SortOrder
    menuType?: SortOrderInput | SortOrder
    visible?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    perms?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysMenuCountOrderByAggregateInput
    _avg?: SysMenuAvgOrderByAggregateInput
    _max?: SysMenuMaxOrderByAggregateInput
    _min?: SysMenuMinOrderByAggregateInput
    _sum?: SysMenuSumOrderByAggregateInput
  }

  export type SysMenuScalarWhereWithAggregatesInput = {
    AND?: SysMenuScalarWhereWithAggregatesInput | SysMenuScalarWhereWithAggregatesInput[]
    OR?: SysMenuScalarWhereWithAggregatesInput[]
    NOT?: SysMenuScalarWhereWithAggregatesInput | SysMenuScalarWhereWithAggregatesInput[]
    menuId?: IntWithAggregatesFilter<"SysMenu"> | number
    menuName?: StringWithAggregatesFilter<"SysMenu"> | string
    parentId?: IntNullableWithAggregatesFilter<"SysMenu"> | number | null
    orderNum?: IntNullableWithAggregatesFilter<"SysMenu"> | number | null
    path?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    component?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    query?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    isFrame?: IntNullableWithAggregatesFilter<"SysMenu"> | number | null
    isCache?: IntNullableWithAggregatesFilter<"SysMenu"> | number | null
    menuType?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    visible?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    perms?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    icon?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysMenu"> | string | null
  }

  export type SysNoticeWhereInput = {
    AND?: SysNoticeWhereInput | SysNoticeWhereInput[]
    OR?: SysNoticeWhereInput[]
    NOT?: SysNoticeWhereInput | SysNoticeWhereInput[]
    noticeId?: IntFilter<"SysNotice"> | number
    noticeTitle?: StringFilter<"SysNotice"> | string
    noticeType?: StringFilter<"SysNotice"> | string
    noticeContent?: StringNullableFilter<"SysNotice"> | string | null
    status?: StringNullableFilter<"SysNotice"> | string | null
    createBy?: StringNullableFilter<"SysNotice"> | string | null
    createTime?: StringNullableFilter<"SysNotice"> | string | null
    updateBy?: StringNullableFilter<"SysNotice"> | string | null
    updateTime?: StringNullableFilter<"SysNotice"> | string | null
    remark?: StringNullableFilter<"SysNotice"> | string | null
  }

  export type SysNoticeOrderByWithRelationInput = {
    noticeId?: SortOrder
    noticeTitle?: SortOrder
    noticeType?: SortOrder
    noticeContent?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
  }

  export type SysNoticeWhereUniqueInput = Prisma.AtLeast<{
    noticeId?: number
    AND?: SysNoticeWhereInput | SysNoticeWhereInput[]
    OR?: SysNoticeWhereInput[]
    NOT?: SysNoticeWhereInput | SysNoticeWhereInput[]
    noticeTitle?: StringFilter<"SysNotice"> | string
    noticeType?: StringFilter<"SysNotice"> | string
    noticeContent?: StringNullableFilter<"SysNotice"> | string | null
    status?: StringNullableFilter<"SysNotice"> | string | null
    createBy?: StringNullableFilter<"SysNotice"> | string | null
    createTime?: StringNullableFilter<"SysNotice"> | string | null
    updateBy?: StringNullableFilter<"SysNotice"> | string | null
    updateTime?: StringNullableFilter<"SysNotice"> | string | null
    remark?: StringNullableFilter<"SysNotice"> | string | null
  }, "noticeId">

  export type SysNoticeOrderByWithAggregationInput = {
    noticeId?: SortOrder
    noticeTitle?: SortOrder
    noticeType?: SortOrder
    noticeContent?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysNoticeCountOrderByAggregateInput
    _avg?: SysNoticeAvgOrderByAggregateInput
    _max?: SysNoticeMaxOrderByAggregateInput
    _min?: SysNoticeMinOrderByAggregateInput
    _sum?: SysNoticeSumOrderByAggregateInput
  }

  export type SysNoticeScalarWhereWithAggregatesInput = {
    AND?: SysNoticeScalarWhereWithAggregatesInput | SysNoticeScalarWhereWithAggregatesInput[]
    OR?: SysNoticeScalarWhereWithAggregatesInput[]
    NOT?: SysNoticeScalarWhereWithAggregatesInput | SysNoticeScalarWhereWithAggregatesInput[]
    noticeId?: IntWithAggregatesFilter<"SysNotice"> | number
    noticeTitle?: StringWithAggregatesFilter<"SysNotice"> | string
    noticeType?: StringWithAggregatesFilter<"SysNotice"> | string
    noticeContent?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysNotice"> | string | null
  }

  export type SysPostWhereInput = {
    AND?: SysPostWhereInput | SysPostWhereInput[]
    OR?: SysPostWhereInput[]
    NOT?: SysPostWhereInput | SysPostWhereInput[]
    postId?: IntFilter<"SysPost"> | number
    postCode?: StringFilter<"SysPost"> | string
    postName?: StringFilter<"SysPost"> | string
    postSort?: IntFilter<"SysPost"> | number
    status?: StringFilter<"SysPost"> | string
    createBy?: StringNullableFilter<"SysPost"> | string | null
    createTime?: StringNullableFilter<"SysPost"> | string | null
    updateBy?: StringNullableFilter<"SysPost"> | string | null
    updateTime?: StringNullableFilter<"SysPost"> | string | null
    remark?: StringNullableFilter<"SysPost"> | string | null
    users?: SysUserPostListRelationFilter
  }

  export type SysPostOrderByWithRelationInput = {
    postId?: SortOrder
    postCode?: SortOrder
    postName?: SortOrder
    postSort?: SortOrder
    status?: SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    users?: SysUserPostOrderByRelationAggregateInput
  }

  export type SysPostWhereUniqueInput = Prisma.AtLeast<{
    postId?: number
    AND?: SysPostWhereInput | SysPostWhereInput[]
    OR?: SysPostWhereInput[]
    NOT?: SysPostWhereInput | SysPostWhereInput[]
    postCode?: StringFilter<"SysPost"> | string
    postName?: StringFilter<"SysPost"> | string
    postSort?: IntFilter<"SysPost"> | number
    status?: StringFilter<"SysPost"> | string
    createBy?: StringNullableFilter<"SysPost"> | string | null
    createTime?: StringNullableFilter<"SysPost"> | string | null
    updateBy?: StringNullableFilter<"SysPost"> | string | null
    updateTime?: StringNullableFilter<"SysPost"> | string | null
    remark?: StringNullableFilter<"SysPost"> | string | null
    users?: SysUserPostListRelationFilter
  }, "postId">

  export type SysPostOrderByWithAggregationInput = {
    postId?: SortOrder
    postCode?: SortOrder
    postName?: SortOrder
    postSort?: SortOrder
    status?: SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysPostCountOrderByAggregateInput
    _avg?: SysPostAvgOrderByAggregateInput
    _max?: SysPostMaxOrderByAggregateInput
    _min?: SysPostMinOrderByAggregateInput
    _sum?: SysPostSumOrderByAggregateInput
  }

  export type SysPostScalarWhereWithAggregatesInput = {
    AND?: SysPostScalarWhereWithAggregatesInput | SysPostScalarWhereWithAggregatesInput[]
    OR?: SysPostScalarWhereWithAggregatesInput[]
    NOT?: SysPostScalarWhereWithAggregatesInput | SysPostScalarWhereWithAggregatesInput[]
    postId?: IntWithAggregatesFilter<"SysPost"> | number
    postCode?: StringWithAggregatesFilter<"SysPost"> | string
    postName?: StringWithAggregatesFilter<"SysPost"> | string
    postSort?: IntWithAggregatesFilter<"SysPost"> | number
    status?: StringWithAggregatesFilter<"SysPost"> | string
    createBy?: StringNullableWithAggregatesFilter<"SysPost"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysPost"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysPost"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysPost"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysPost"> | string | null
  }

  export type SysUserPostWhereInput = {
    AND?: SysUserPostWhereInput | SysUserPostWhereInput[]
    OR?: SysUserPostWhereInput[]
    NOT?: SysUserPostWhereInput | SysUserPostWhereInput[]
    userId?: IntFilter<"SysUserPost"> | number
    postId?: IntFilter<"SysUserPost"> | number
    user?: XOR<SysUserRelationFilter, SysUserWhereInput>
    post?: XOR<SysPostRelationFilter, SysPostWhereInput>
  }

  export type SysUserPostOrderByWithRelationInput = {
    userId?: SortOrder
    postId?: SortOrder
    user?: SysUserOrderByWithRelationInput
    post?: SysPostOrderByWithRelationInput
  }

  export type SysUserPostWhereUniqueInput = Prisma.AtLeast<{
    userId_postId?: SysUserPostUserIdPostIdCompoundUniqueInput
    AND?: SysUserPostWhereInput | SysUserPostWhereInput[]
    OR?: SysUserPostWhereInput[]
    NOT?: SysUserPostWhereInput | SysUserPostWhereInput[]
    userId?: IntFilter<"SysUserPost"> | number
    postId?: IntFilter<"SysUserPost"> | number
    user?: XOR<SysUserRelationFilter, SysUserWhereInput>
    post?: XOR<SysPostRelationFilter, SysPostWhereInput>
  }, "userId_postId">

  export type SysUserPostOrderByWithAggregationInput = {
    userId?: SortOrder
    postId?: SortOrder
    _count?: SysUserPostCountOrderByAggregateInput
    _avg?: SysUserPostAvgOrderByAggregateInput
    _max?: SysUserPostMaxOrderByAggregateInput
    _min?: SysUserPostMinOrderByAggregateInput
    _sum?: SysUserPostSumOrderByAggregateInput
  }

  export type SysUserPostScalarWhereWithAggregatesInput = {
    AND?: SysUserPostScalarWhereWithAggregatesInput | SysUserPostScalarWhereWithAggregatesInput[]
    OR?: SysUserPostScalarWhereWithAggregatesInput[]
    NOT?: SysUserPostScalarWhereWithAggregatesInput | SysUserPostScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SysUserPost"> | number
    postId?: IntWithAggregatesFilter<"SysUserPost"> | number
  }

  export type SysRoleDeptWhereInput = {
    AND?: SysRoleDeptWhereInput | SysRoleDeptWhereInput[]
    OR?: SysRoleDeptWhereInput[]
    NOT?: SysRoleDeptWhereInput | SysRoleDeptWhereInput[]
    roleId?: IntFilter<"SysRoleDept"> | number
    deptId?: IntFilter<"SysRoleDept"> | number
    role?: XOR<SysRoleRelationFilter, SysRoleWhereInput>
    dept?: XOR<SysDeptRelationFilter, SysDeptWhereInput>
  }

  export type SysRoleDeptOrderByWithRelationInput = {
    roleId?: SortOrder
    deptId?: SortOrder
    role?: SysRoleOrderByWithRelationInput
    dept?: SysDeptOrderByWithRelationInput
  }

  export type SysRoleDeptWhereUniqueInput = Prisma.AtLeast<{
    roleId_deptId?: SysRoleDeptRoleIdDeptIdCompoundUniqueInput
    AND?: SysRoleDeptWhereInput | SysRoleDeptWhereInput[]
    OR?: SysRoleDeptWhereInput[]
    NOT?: SysRoleDeptWhereInput | SysRoleDeptWhereInput[]
    roleId?: IntFilter<"SysRoleDept"> | number
    deptId?: IntFilter<"SysRoleDept"> | number
    role?: XOR<SysRoleRelationFilter, SysRoleWhereInput>
    dept?: XOR<SysDeptRelationFilter, SysDeptWhereInput>
  }, "roleId_deptId">

  export type SysRoleDeptOrderByWithAggregationInput = {
    roleId?: SortOrder
    deptId?: SortOrder
    _count?: SysRoleDeptCountOrderByAggregateInput
    _avg?: SysRoleDeptAvgOrderByAggregateInput
    _max?: SysRoleDeptMaxOrderByAggregateInput
    _min?: SysRoleDeptMinOrderByAggregateInput
    _sum?: SysRoleDeptSumOrderByAggregateInput
  }

  export type SysRoleDeptScalarWhereWithAggregatesInput = {
    AND?: SysRoleDeptScalarWhereWithAggregatesInput | SysRoleDeptScalarWhereWithAggregatesInput[]
    OR?: SysRoleDeptScalarWhereWithAggregatesInput[]
    NOT?: SysRoleDeptScalarWhereWithAggregatesInput | SysRoleDeptScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"SysRoleDept"> | number
    deptId?: IntWithAggregatesFilter<"SysRoleDept"> | number
  }

  export type SysRoleMenuWhereInput = {
    AND?: SysRoleMenuWhereInput | SysRoleMenuWhereInput[]
    OR?: SysRoleMenuWhereInput[]
    NOT?: SysRoleMenuWhereInput | SysRoleMenuWhereInput[]
    roleId?: IntFilter<"SysRoleMenu"> | number
    menuId?: IntFilter<"SysRoleMenu"> | number
    menu?: XOR<SysMenuRelationFilter, SysMenuWhereInput>
    role?: XOR<SysRoleRelationFilter, SysRoleWhereInput>
  }

  export type SysRoleMenuOrderByWithRelationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    menu?: SysMenuOrderByWithRelationInput
    role?: SysRoleOrderByWithRelationInput
  }

  export type SysRoleMenuWhereUniqueInput = Prisma.AtLeast<{
    roleId_menuId?: SysRoleMenuRoleIdMenuIdCompoundUniqueInput
    AND?: SysRoleMenuWhereInput | SysRoleMenuWhereInput[]
    OR?: SysRoleMenuWhereInput[]
    NOT?: SysRoleMenuWhereInput | SysRoleMenuWhereInput[]
    roleId?: IntFilter<"SysRoleMenu"> | number
    menuId?: IntFilter<"SysRoleMenu"> | number
    menu?: XOR<SysMenuRelationFilter, SysMenuWhereInput>
    role?: XOR<SysRoleRelationFilter, SysRoleWhereInput>
  }, "roleId_menuId">

  export type SysRoleMenuOrderByWithAggregationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    _count?: SysRoleMenuCountOrderByAggregateInput
    _avg?: SysRoleMenuAvgOrderByAggregateInput
    _max?: SysRoleMenuMaxOrderByAggregateInput
    _min?: SysRoleMenuMinOrderByAggregateInput
    _sum?: SysRoleMenuSumOrderByAggregateInput
  }

  export type SysRoleMenuScalarWhereWithAggregatesInput = {
    AND?: SysRoleMenuScalarWhereWithAggregatesInput | SysRoleMenuScalarWhereWithAggregatesInput[]
    OR?: SysRoleMenuScalarWhereWithAggregatesInput[]
    NOT?: SysRoleMenuScalarWhereWithAggregatesInput | SysRoleMenuScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"SysRoleMenu"> | number
    menuId?: IntWithAggregatesFilter<"SysRoleMenu"> | number
  }

  export type SysUserWhereInput = {
    AND?: SysUserWhereInput | SysUserWhereInput[]
    OR?: SysUserWhereInput[]
    NOT?: SysUserWhereInput | SysUserWhereInput[]
    userId?: IntFilter<"SysUser"> | number
    deptId?: IntNullableFilter<"SysUser"> | number | null
    userName?: StringFilter<"SysUser"> | string
    nickName?: StringFilter<"SysUser"> | string
    userType?: StringNullableFilter<"SysUser"> | string | null
    email?: StringNullableFilter<"SysUser"> | string | null
    phonenumber?: StringNullableFilter<"SysUser"> | string | null
    sex?: StringNullableFilter<"SysUser"> | string | null
    avatar?: StringNullableFilter<"SysUser"> | string | null
    password?: StringNullableFilter<"SysUser"> | string | null
    status?: StringNullableFilter<"SysUser"> | string | null
    loginIp?: StringNullableFilter<"SysUser"> | string | null
    loginDate?: StringNullableFilter<"SysUser"> | string | null
    createBy?: StringNullableFilter<"SysUser"> | string | null
    createTime?: StringNullableFilter<"SysUser"> | string | null
    updateBy?: StringNullableFilter<"SysUser"> | string | null
    updateTime?: StringNullableFilter<"SysUser"> | string | null
    remark?: StringNullableFilter<"SysUser"> | string | null
    dept?: XOR<SysDeptNullableRelationFilter, SysDeptWhereInput> | null
    roles?: SysUserRoleListRelationFilter
    posts?: SysUserPostListRelationFilter
  }

  export type SysUserOrderByWithRelationInput = {
    userId?: SortOrder
    deptId?: SortOrderInput | SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    userType?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phonenumber?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    loginIp?: SortOrderInput | SortOrder
    loginDate?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    dept?: SysDeptOrderByWithRelationInput
    roles?: SysUserRoleOrderByRelationAggregateInput
    posts?: SysUserPostOrderByRelationAggregateInput
  }

  export type SysUserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: SysUserWhereInput | SysUserWhereInput[]
    OR?: SysUserWhereInput[]
    NOT?: SysUserWhereInput | SysUserWhereInput[]
    deptId?: IntNullableFilter<"SysUser"> | number | null
    userName?: StringFilter<"SysUser"> | string
    nickName?: StringFilter<"SysUser"> | string
    userType?: StringNullableFilter<"SysUser"> | string | null
    email?: StringNullableFilter<"SysUser"> | string | null
    phonenumber?: StringNullableFilter<"SysUser"> | string | null
    sex?: StringNullableFilter<"SysUser"> | string | null
    avatar?: StringNullableFilter<"SysUser"> | string | null
    password?: StringNullableFilter<"SysUser"> | string | null
    status?: StringNullableFilter<"SysUser"> | string | null
    loginIp?: StringNullableFilter<"SysUser"> | string | null
    loginDate?: StringNullableFilter<"SysUser"> | string | null
    createBy?: StringNullableFilter<"SysUser"> | string | null
    createTime?: StringNullableFilter<"SysUser"> | string | null
    updateBy?: StringNullableFilter<"SysUser"> | string | null
    updateTime?: StringNullableFilter<"SysUser"> | string | null
    remark?: StringNullableFilter<"SysUser"> | string | null
    dept?: XOR<SysDeptNullableRelationFilter, SysDeptWhereInput> | null
    roles?: SysUserRoleListRelationFilter
    posts?: SysUserPostListRelationFilter
  }, "userId">

  export type SysUserOrderByWithAggregationInput = {
    userId?: SortOrder
    deptId?: SortOrderInput | SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    userType?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phonenumber?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    loginIp?: SortOrderInput | SortOrder
    loginDate?: SortOrderInput | SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysUserCountOrderByAggregateInput
    _avg?: SysUserAvgOrderByAggregateInput
    _max?: SysUserMaxOrderByAggregateInput
    _min?: SysUserMinOrderByAggregateInput
    _sum?: SysUserSumOrderByAggregateInput
  }

  export type SysUserScalarWhereWithAggregatesInput = {
    AND?: SysUserScalarWhereWithAggregatesInput | SysUserScalarWhereWithAggregatesInput[]
    OR?: SysUserScalarWhereWithAggregatesInput[]
    NOT?: SysUserScalarWhereWithAggregatesInput | SysUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SysUser"> | number
    deptId?: IntNullableWithAggregatesFilter<"SysUser"> | number | null
    userName?: StringWithAggregatesFilter<"SysUser"> | string
    nickName?: StringWithAggregatesFilter<"SysUser"> | string
    userType?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    email?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    phonenumber?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    sex?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    password?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    status?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    loginIp?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    loginDate?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    createBy?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysUser"> | string | null
  }

  export type SysRoleWhereInput = {
    AND?: SysRoleWhereInput | SysRoleWhereInput[]
    OR?: SysRoleWhereInput[]
    NOT?: SysRoleWhereInput | SysRoleWhereInput[]
    roleId?: IntFilter<"SysRole"> | number
    roleName?: StringFilter<"SysRole"> | string
    roleKey?: StringFilter<"SysRole"> | string
    roleSort?: IntFilter<"SysRole"> | number
    dataScope?: StringNullableFilter<"SysRole"> | string | null
    menuCheckStrictly?: IntNullableFilter<"SysRole"> | number | null
    deptCheckStrictly?: IntNullableFilter<"SysRole"> | number | null
    status?: StringFilter<"SysRole"> | string
    createBy?: StringNullableFilter<"SysRole"> | string | null
    createTime?: StringNullableFilter<"SysRole"> | string | null
    updateBy?: StringNullableFilter<"SysRole"> | string | null
    updateTime?: StringNullableFilter<"SysRole"> | string | null
    remark?: StringNullableFilter<"SysRole"> | string | null
    users?: SysUserRoleListRelationFilter
    menus?: SysRoleMenuListRelationFilter
    depts?: SysRoleDeptListRelationFilter
  }

  export type SysRoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    roleKey?: SortOrder
    roleSort?: SortOrder
    dataScope?: SortOrderInput | SortOrder
    menuCheckStrictly?: SortOrderInput | SortOrder
    deptCheckStrictly?: SortOrderInput | SortOrder
    status?: SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    users?: SysUserRoleOrderByRelationAggregateInput
    menus?: SysRoleMenuOrderByRelationAggregateInput
    depts?: SysRoleDeptOrderByRelationAggregateInput
  }

  export type SysRoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    AND?: SysRoleWhereInput | SysRoleWhereInput[]
    OR?: SysRoleWhereInput[]
    NOT?: SysRoleWhereInput | SysRoleWhereInput[]
    roleName?: StringFilter<"SysRole"> | string
    roleKey?: StringFilter<"SysRole"> | string
    roleSort?: IntFilter<"SysRole"> | number
    dataScope?: StringNullableFilter<"SysRole"> | string | null
    menuCheckStrictly?: IntNullableFilter<"SysRole"> | number | null
    deptCheckStrictly?: IntNullableFilter<"SysRole"> | number | null
    status?: StringFilter<"SysRole"> | string
    createBy?: StringNullableFilter<"SysRole"> | string | null
    createTime?: StringNullableFilter<"SysRole"> | string | null
    updateBy?: StringNullableFilter<"SysRole"> | string | null
    updateTime?: StringNullableFilter<"SysRole"> | string | null
    remark?: StringNullableFilter<"SysRole"> | string | null
    users?: SysUserRoleListRelationFilter
    menus?: SysRoleMenuListRelationFilter
    depts?: SysRoleDeptListRelationFilter
  }, "roleId">

  export type SysRoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    roleKey?: SortOrder
    roleSort?: SortOrder
    dataScope?: SortOrderInput | SortOrder
    menuCheckStrictly?: SortOrderInput | SortOrder
    deptCheckStrictly?: SortOrderInput | SortOrder
    status?: SortOrder
    createBy?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    updateBy?: SortOrderInput | SortOrder
    updateTime?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: SysRoleCountOrderByAggregateInput
    _avg?: SysRoleAvgOrderByAggregateInput
    _max?: SysRoleMaxOrderByAggregateInput
    _min?: SysRoleMinOrderByAggregateInput
    _sum?: SysRoleSumOrderByAggregateInput
  }

  export type SysRoleScalarWhereWithAggregatesInput = {
    AND?: SysRoleScalarWhereWithAggregatesInput | SysRoleScalarWhereWithAggregatesInput[]
    OR?: SysRoleScalarWhereWithAggregatesInput[]
    NOT?: SysRoleScalarWhereWithAggregatesInput | SysRoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"SysRole"> | number
    roleName?: StringWithAggregatesFilter<"SysRole"> | string
    roleKey?: StringWithAggregatesFilter<"SysRole"> | string
    roleSort?: IntWithAggregatesFilter<"SysRole"> | number
    dataScope?: StringNullableWithAggregatesFilter<"SysRole"> | string | null
    menuCheckStrictly?: IntNullableWithAggregatesFilter<"SysRole"> | number | null
    deptCheckStrictly?: IntNullableWithAggregatesFilter<"SysRole"> | number | null
    status?: StringWithAggregatesFilter<"SysRole"> | string
    createBy?: StringNullableWithAggregatesFilter<"SysRole"> | string | null
    createTime?: StringNullableWithAggregatesFilter<"SysRole"> | string | null
    updateBy?: StringNullableWithAggregatesFilter<"SysRole"> | string | null
    updateTime?: StringNullableWithAggregatesFilter<"SysRole"> | string | null
    remark?: StringNullableWithAggregatesFilter<"SysRole"> | string | null
  }

  export type SysUserRoleWhereInput = {
    AND?: SysUserRoleWhereInput | SysUserRoleWhereInput[]
    OR?: SysUserRoleWhereInput[]
    NOT?: SysUserRoleWhereInput | SysUserRoleWhereInput[]
    userId?: IntFilter<"SysUserRole"> | number
    roleId?: IntFilter<"SysUserRole"> | number
    user?: XOR<SysUserRelationFilter, SysUserWhereInput>
    role?: XOR<SysRoleRelationFilter, SysRoleWhereInput>
  }

  export type SysUserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: SysUserOrderByWithRelationInput
    role?: SysRoleOrderByWithRelationInput
  }

  export type SysUserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: SysUserRoleUserIdRoleIdCompoundUniqueInput
    AND?: SysUserRoleWhereInput | SysUserRoleWhereInput[]
    OR?: SysUserRoleWhereInput[]
    NOT?: SysUserRoleWhereInput | SysUserRoleWhereInput[]
    userId?: IntFilter<"SysUserRole"> | number
    roleId?: IntFilter<"SysUserRole"> | number
    user?: XOR<SysUserRelationFilter, SysUserWhereInput>
    role?: XOR<SysRoleRelationFilter, SysRoleWhereInput>
  }, "userId_roleId">

  export type SysUserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: SysUserRoleCountOrderByAggregateInput
    _avg?: SysUserRoleAvgOrderByAggregateInput
    _max?: SysUserRoleMaxOrderByAggregateInput
    _min?: SysUserRoleMinOrderByAggregateInput
    _sum?: SysUserRoleSumOrderByAggregateInput
  }

  export type SysUserRoleScalarWhereWithAggregatesInput = {
    AND?: SysUserRoleScalarWhereWithAggregatesInput | SysUserRoleScalarWhereWithAggregatesInput[]
    OR?: SysUserRoleScalarWhereWithAggregatesInput[]
    NOT?: SysUserRoleScalarWhereWithAggregatesInput | SysUserRoleScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SysUserRole"> | number
    roleId?: IntWithAggregatesFilter<"SysUserRole"> | number
  }

  export type GenTableCreateInput = {
    tableName?: string | null
    tableComment?: string | null
    subTableName?: string | null
    subTableFkName?: string | null
    className?: string | null
    tplCategory?: string | null
    tplWebType?: string | null
    packageName?: string | null
    moduleName?: string | null
    businessName?: string | null
    functionName?: string | null
    functionAuthor?: string | null
    genType?: string | null
    genPath?: string | null
    options?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    tableColumns?: GenTableColumnCreateNestedManyWithoutTableInput
  }

  export type GenTableUncheckedCreateInput = {
    tableId?: number
    tableName?: string | null
    tableComment?: string | null
    subTableName?: string | null
    subTableFkName?: string | null
    className?: string | null
    tplCategory?: string | null
    tplWebType?: string | null
    packageName?: string | null
    moduleName?: string | null
    businessName?: string | null
    functionName?: string | null
    functionAuthor?: string | null
    genType?: string | null
    genPath?: string | null
    options?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    tableColumns?: GenTableColumnUncheckedCreateNestedManyWithoutTableInput
  }

  export type GenTableUpdateInput = {
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableComment?: NullableStringFieldUpdateOperationsInput | string | null
    subTableName?: NullableStringFieldUpdateOperationsInput | string | null
    subTableFkName?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    tplCategory?: NullableStringFieldUpdateOperationsInput | string | null
    tplWebType?: NullableStringFieldUpdateOperationsInput | string | null
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    moduleName?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    functionName?: NullableStringFieldUpdateOperationsInput | string | null
    functionAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    genType?: NullableStringFieldUpdateOperationsInput | string | null
    genPath?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    tableColumns?: GenTableColumnUpdateManyWithoutTableNestedInput
  }

  export type GenTableUncheckedUpdateInput = {
    tableId?: IntFieldUpdateOperationsInput | number
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableComment?: NullableStringFieldUpdateOperationsInput | string | null
    subTableName?: NullableStringFieldUpdateOperationsInput | string | null
    subTableFkName?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    tplCategory?: NullableStringFieldUpdateOperationsInput | string | null
    tplWebType?: NullableStringFieldUpdateOperationsInput | string | null
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    moduleName?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    functionName?: NullableStringFieldUpdateOperationsInput | string | null
    functionAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    genType?: NullableStringFieldUpdateOperationsInput | string | null
    genPath?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    tableColumns?: GenTableColumnUncheckedUpdateManyWithoutTableNestedInput
  }

  export type GenTableCreateManyInput = {
    tableId?: number
    tableName?: string | null
    tableComment?: string | null
    subTableName?: string | null
    subTableFkName?: string | null
    className?: string | null
    tplCategory?: string | null
    tplWebType?: string | null
    packageName?: string | null
    moduleName?: string | null
    businessName?: string | null
    functionName?: string | null
    functionAuthor?: string | null
    genType?: string | null
    genPath?: string | null
    options?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type GenTableUpdateManyMutationInput = {
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableComment?: NullableStringFieldUpdateOperationsInput | string | null
    subTableName?: NullableStringFieldUpdateOperationsInput | string | null
    subTableFkName?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    tplCategory?: NullableStringFieldUpdateOperationsInput | string | null
    tplWebType?: NullableStringFieldUpdateOperationsInput | string | null
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    moduleName?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    functionName?: NullableStringFieldUpdateOperationsInput | string | null
    functionAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    genType?: NullableStringFieldUpdateOperationsInput | string | null
    genPath?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableUncheckedUpdateManyInput = {
    tableId?: IntFieldUpdateOperationsInput | number
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableComment?: NullableStringFieldUpdateOperationsInput | string | null
    subTableName?: NullableStringFieldUpdateOperationsInput | string | null
    subTableFkName?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    tplCategory?: NullableStringFieldUpdateOperationsInput | string | null
    tplWebType?: NullableStringFieldUpdateOperationsInput | string | null
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    moduleName?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    functionName?: NullableStringFieldUpdateOperationsInput | string | null
    functionAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    genType?: NullableStringFieldUpdateOperationsInput | string | null
    genPath?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableColumnCreateInput = {
    columnName?: string | null
    columnComment?: string | null
    columnType?: string | null
    javaType?: string | null
    javaField?: string | null
    isPk?: string | null
    isIncrement?: string | null
    isRequired?: string | null
    isInsert?: string | null
    isEdit?: string | null
    isList?: string | null
    isQuery?: string | null
    queryType?: string | null
    htmlType?: string | null
    dictType?: string | null
    sort?: number | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    table?: GenTableCreateNestedOneWithoutTableColumnsInput
  }

  export type GenTableColumnUncheckedCreateInput = {
    columnId?: number
    tableId?: number | null
    columnName?: string | null
    columnComment?: string | null
    columnType?: string | null
    javaType?: string | null
    javaField?: string | null
    isPk?: string | null
    isIncrement?: string | null
    isRequired?: string | null
    isInsert?: string | null
    isEdit?: string | null
    isList?: string | null
    isQuery?: string | null
    queryType?: string | null
    htmlType?: string | null
    dictType?: string | null
    sort?: number | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
  }

  export type GenTableColumnUpdateInput = {
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    table?: GenTableUpdateOneWithoutTableColumnsNestedInput
  }

  export type GenTableColumnUncheckedUpdateInput = {
    columnId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableColumnCreateManyInput = {
    columnId?: number
    tableId?: number | null
    columnName?: string | null
    columnComment?: string | null
    columnType?: string | null
    javaType?: string | null
    javaField?: string | null
    isPk?: string | null
    isIncrement?: string | null
    isRequired?: string | null
    isInsert?: string | null
    isEdit?: string | null
    isList?: string | null
    isQuery?: string | null
    queryType?: string | null
    htmlType?: string | null
    dictType?: string | null
    sort?: number | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
  }

  export type GenTableColumnUpdateManyMutationInput = {
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableColumnUncheckedUpdateManyInput = {
    columnId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysConfigCreateInput = {
    configName?: string | null
    configKey?: string | null
    configValue?: string | null
    configType?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysConfigUncheckedCreateInput = {
    configId?: number
    configName?: string | null
    configKey?: string | null
    configValue?: string | null
    configType?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysConfigUpdateInput = {
    configName?: NullableStringFieldUpdateOperationsInput | string | null
    configKey?: NullableStringFieldUpdateOperationsInput | string | null
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    configType?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysConfigUncheckedUpdateInput = {
    configId?: IntFieldUpdateOperationsInput | number
    configName?: NullableStringFieldUpdateOperationsInput | string | null
    configKey?: NullableStringFieldUpdateOperationsInput | string | null
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    configType?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysConfigCreateManyInput = {
    configId?: number
    configName?: string | null
    configKey?: string | null
    configValue?: string | null
    configType?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysConfigUpdateManyMutationInput = {
    configName?: NullableStringFieldUpdateOperationsInput | string | null
    configKey?: NullableStringFieldUpdateOperationsInput | string | null
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    configType?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysConfigUncheckedUpdateManyInput = {
    configId?: IntFieldUpdateOperationsInput | number
    configName?: NullableStringFieldUpdateOperationsInput | string | null
    configKey?: NullableStringFieldUpdateOperationsInput | string | null
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    configType?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDeptCreateInput = {
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    users?: SysUserCreateNestedManyWithoutDeptInput
    roles?: SysRoleDeptCreateNestedManyWithoutDeptInput
  }

  export type SysDeptUncheckedCreateInput = {
    deptId?: number
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    users?: SysUserUncheckedCreateNestedManyWithoutDeptInput
    roles?: SysRoleDeptUncheckedCreateNestedManyWithoutDeptInput
  }

  export type SysDeptUpdateInput = {
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserUpdateManyWithoutDeptNestedInput
    roles?: SysRoleDeptUpdateManyWithoutDeptNestedInput
  }

  export type SysDeptUncheckedUpdateInput = {
    deptId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserUncheckedUpdateManyWithoutDeptNestedInput
    roles?: SysRoleDeptUncheckedUpdateManyWithoutDeptNestedInput
  }

  export type SysDeptCreateManyInput = {
    deptId?: number
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
  }

  export type SysDeptUpdateManyMutationInput = {
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDeptUncheckedUpdateManyInput = {
    deptId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictDataCreateInput = {
    dictSort?: number | null
    dictLabel?: string | null
    dictValue?: string | null
    cssClass?: string | null
    listClass?: string | null
    isDefault?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    sysDictType?: SysDictTypeCreateNestedOneWithoutDictDatasInput
  }

  export type SysDictDataUncheckedCreateInput = {
    dictCode?: number
    dictSort?: number | null
    dictLabel?: string | null
    dictValue?: string | null
    dictType?: string | null
    cssClass?: string | null
    listClass?: string | null
    isDefault?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictDataUpdateInput = {
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    sysDictType?: SysDictTypeUpdateOneWithoutDictDatasNestedInput
  }

  export type SysDictDataUncheckedUpdateInput = {
    dictCode?: IntFieldUpdateOperationsInput | number
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictDataCreateManyInput = {
    dictCode?: number
    dictSort?: number | null
    dictLabel?: string | null
    dictValue?: string | null
    dictType?: string | null
    cssClass?: string | null
    listClass?: string | null
    isDefault?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictDataUpdateManyMutationInput = {
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictDataUncheckedUpdateManyInput = {
    dictCode?: IntFieldUpdateOperationsInput | number
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictTypeCreateInput = {
    dictName?: string | null
    dictType?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    dictDatas?: SysDictDataCreateNestedManyWithoutSysDictTypeInput
  }

  export type SysDictTypeUncheckedCreateInput = {
    dictId?: number
    dictName?: string | null
    dictType?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    dictDatas?: SysDictDataUncheckedCreateNestedManyWithoutSysDictTypeInput
  }

  export type SysDictTypeUpdateInput = {
    dictName?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    dictDatas?: SysDictDataUpdateManyWithoutSysDictTypeNestedInput
  }

  export type SysDictTypeUncheckedUpdateInput = {
    dictId?: IntFieldUpdateOperationsInput | number
    dictName?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    dictDatas?: SysDictDataUncheckedUpdateManyWithoutSysDictTypeNestedInput
  }

  export type SysDictTypeCreateManyInput = {
    dictId?: number
    dictName?: string | null
    dictType?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictTypeUpdateManyMutationInput = {
    dictName?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictTypeUncheckedUpdateManyInput = {
    dictId?: IntFieldUpdateOperationsInput | number
    dictName?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysLogininforCreateInput = {
    userName?: string | null
    ipaddr?: string | null
    loginLocation?: string | null
    browser?: string | null
    os?: string | null
    status?: string | null
    msg?: string | null
    loginTime?: string | null
  }

  export type SysLogininforUncheckedCreateInput = {
    infoId?: number
    userName?: string | null
    ipaddr?: string | null
    loginLocation?: string | null
    browser?: string | null
    os?: string | null
    status?: string | null
    msg?: string | null
    loginTime?: string | null
  }

  export type SysLogininforUpdateInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    ipaddr?: NullableStringFieldUpdateOperationsInput | string | null
    loginLocation?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    loginTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysLogininforUncheckedUpdateInput = {
    infoId?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    ipaddr?: NullableStringFieldUpdateOperationsInput | string | null
    loginLocation?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    loginTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysLogininforCreateManyInput = {
    infoId?: number
    userName?: string | null
    ipaddr?: string | null
    loginLocation?: string | null
    browser?: string | null
    os?: string | null
    status?: string | null
    msg?: string | null
    loginTime?: string | null
  }

  export type SysLogininforUpdateManyMutationInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    ipaddr?: NullableStringFieldUpdateOperationsInput | string | null
    loginLocation?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    loginTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysLogininforUncheckedUpdateManyInput = {
    infoId?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    ipaddr?: NullableStringFieldUpdateOperationsInput | string | null
    loginLocation?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    loginTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysMenuCreateInput = {
    menuName: string
    parentId?: number | null
    orderNum?: number | null
    path?: string | null
    component?: string | null
    query?: string | null
    isFrame?: number | null
    isCache?: number | null
    menuType?: string | null
    visible?: string | null
    status?: string | null
    perms?: string | null
    icon?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    roles?: SysRoleMenuCreateNestedManyWithoutMenuInput
  }

  export type SysMenuUncheckedCreateInput = {
    menuId?: number
    menuName: string
    parentId?: number | null
    orderNum?: number | null
    path?: string | null
    component?: string | null
    query?: string | null
    isFrame?: number | null
    isCache?: number | null
    menuType?: string | null
    visible?: string | null
    status?: string | null
    perms?: string | null
    icon?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    roles?: SysRoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type SysMenuUpdateInput = {
    menuName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: NullableIntFieldUpdateOperationsInput | number | null
    menuType?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysRoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type SysMenuUncheckedUpdateInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    menuName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: NullableIntFieldUpdateOperationsInput | number | null
    menuType?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysRoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type SysMenuCreateManyInput = {
    menuId?: number
    menuName: string
    parentId?: number | null
    orderNum?: number | null
    path?: string | null
    component?: string | null
    query?: string | null
    isFrame?: number | null
    isCache?: number | null
    menuType?: string | null
    visible?: string | null
    status?: string | null
    perms?: string | null
    icon?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysMenuUpdateManyMutationInput = {
    menuName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: NullableIntFieldUpdateOperationsInput | number | null
    menuType?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysMenuUncheckedUpdateManyInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    menuName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: NullableIntFieldUpdateOperationsInput | number | null
    menuType?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysNoticeCreateInput = {
    noticeTitle: string
    noticeType: string
    noticeContent?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysNoticeUncheckedCreateInput = {
    noticeId?: number
    noticeTitle: string
    noticeType: string
    noticeContent?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysNoticeUpdateInput = {
    noticeTitle?: StringFieldUpdateOperationsInput | string
    noticeType?: StringFieldUpdateOperationsInput | string
    noticeContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysNoticeUncheckedUpdateInput = {
    noticeId?: IntFieldUpdateOperationsInput | number
    noticeTitle?: StringFieldUpdateOperationsInput | string
    noticeType?: StringFieldUpdateOperationsInput | string
    noticeContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysNoticeCreateManyInput = {
    noticeId?: number
    noticeTitle: string
    noticeType: string
    noticeContent?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysNoticeUpdateManyMutationInput = {
    noticeTitle?: StringFieldUpdateOperationsInput | string
    noticeType?: StringFieldUpdateOperationsInput | string
    noticeContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysNoticeUncheckedUpdateManyInput = {
    noticeId?: IntFieldUpdateOperationsInput | number
    noticeTitle?: StringFieldUpdateOperationsInput | string
    noticeType?: StringFieldUpdateOperationsInput | string
    noticeContent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysPostCreateInput = {
    postCode: string
    postName: string
    postSort: number
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserPostCreateNestedManyWithoutPostInput
  }

  export type SysPostUncheckedCreateInput = {
    postId?: number
    postCode: string
    postName: string
    postSort: number
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type SysPostUpdateInput = {
    postCode?: StringFieldUpdateOperationsInput | string
    postName?: StringFieldUpdateOperationsInput | string
    postSort?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserPostUpdateManyWithoutPostNestedInput
  }

  export type SysPostUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    postCode?: StringFieldUpdateOperationsInput | string
    postName?: StringFieldUpdateOperationsInput | string
    postSort?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SysPostCreateManyInput = {
    postId?: number
    postCode: string
    postName: string
    postSort: number
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysPostUpdateManyMutationInput = {
    postCode?: StringFieldUpdateOperationsInput | string
    postName?: StringFieldUpdateOperationsInput | string
    postSort?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysPostUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    postCode?: StringFieldUpdateOperationsInput | string
    postName?: StringFieldUpdateOperationsInput | string
    postSort?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysUserPostCreateInput = {
    user: SysUserCreateNestedOneWithoutPostsInput
    post: SysPostCreateNestedOneWithoutUsersInput
  }

  export type SysUserPostUncheckedCreateInput = {
    userId: number
    postId: number
  }

  export type SysUserPostUpdateInput = {
    user?: SysUserUpdateOneRequiredWithoutPostsNestedInput
    post?: SysPostUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SysUserPostUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserPostCreateManyInput = {
    userId: number
    postId: number
  }

  export type SysUserPostUpdateManyMutationInput = {

  }

  export type SysUserPostUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleDeptCreateInput = {
    role: SysRoleCreateNestedOneWithoutDeptsInput
    dept: SysDeptCreateNestedOneWithoutRolesInput
  }

  export type SysRoleDeptUncheckedCreateInput = {
    roleId: number
    deptId: number
  }

  export type SysRoleDeptUpdateInput = {
    role?: SysRoleUpdateOneRequiredWithoutDeptsNestedInput
    dept?: SysDeptUpdateOneRequiredWithoutRolesNestedInput
  }

  export type SysRoleDeptUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    deptId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleDeptCreateManyInput = {
    roleId: number
    deptId: number
  }

  export type SysRoleDeptUpdateManyMutationInput = {

  }

  export type SysRoleDeptUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    deptId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleMenuCreateInput = {
    menu: SysMenuCreateNestedOneWithoutRolesInput
    role: SysRoleCreateNestedOneWithoutMenusInput
  }

  export type SysRoleMenuUncheckedCreateInput = {
    roleId: number
    menuId: number
  }

  export type SysRoleMenuUpdateInput = {
    menu?: SysMenuUpdateOneRequiredWithoutRolesNestedInput
    role?: SysRoleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type SysRoleMenuUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleMenuCreateManyInput = {
    roleId: number
    menuId: number
  }

  export type SysRoleMenuUpdateManyMutationInput = {

  }

  export type SysRoleMenuUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserCreateInput = {
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    dept?: SysDeptCreateNestedOneWithoutUsersInput
    roles?: SysUserRoleCreateNestedManyWithoutUserInput
    posts?: SysUserPostCreateNestedManyWithoutUserInput
  }

  export type SysUserUncheckedCreateInput = {
    userId?: number
    deptId?: number | null
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    roles?: SysUserRoleUncheckedCreateNestedManyWithoutUserInput
    posts?: SysUserPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type SysUserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: SysDeptUpdateOneWithoutUsersNestedInput
    roles?: SysUserRoleUpdateManyWithoutUserNestedInput
    posts?: SysUserPostUpdateManyWithoutUserNestedInput
  }

  export type SysUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    deptId?: NullableIntFieldUpdateOperationsInput | number | null
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysUserRoleUncheckedUpdateManyWithoutUserNestedInput
    posts?: SysUserPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SysUserCreateManyInput = {
    userId?: number
    deptId?: number | null
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysUserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    deptId?: NullableIntFieldUpdateOperationsInput | number | null
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysRoleCreateInput = {
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserRoleCreateNestedManyWithoutRoleInput
    menus?: SysRoleMenuCreateNestedManyWithoutRoleInput
    depts?: SysRoleDeptCreateNestedManyWithoutRoleInput
  }

  export type SysRoleUncheckedCreateInput = {
    roleId?: number
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserRoleUncheckedCreateNestedManyWithoutRoleInput
    menus?: SysRoleMenuUncheckedCreateNestedManyWithoutRoleInput
    depts?: SysRoleDeptUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SysRoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserRoleUpdateManyWithoutRoleNestedInput
    menus?: SysRoleMenuUpdateManyWithoutRoleNestedInput
    depts?: SysRoleDeptUpdateManyWithoutRoleNestedInput
  }

  export type SysRoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    menus?: SysRoleMenuUncheckedUpdateManyWithoutRoleNestedInput
    depts?: SysRoleDeptUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SysRoleCreateManyInput = {
    roleId?: number
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysRoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysRoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysUserRoleCreateInput = {
    user: SysUserCreateNestedOneWithoutRolesInput
    role: SysRoleCreateNestedOneWithoutUsersInput
  }

  export type SysUserRoleUncheckedCreateInput = {
    userId: number
    roleId: number
  }

  export type SysUserRoleUpdateInput = {
    user?: SysUserUpdateOneRequiredWithoutRolesNestedInput
    role?: SysRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SysUserRoleUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserRoleCreateManyInput = {
    userId: number
    roleId: number
  }

  export type SysUserRoleUpdateManyMutationInput = {

  }

  export type SysUserRoleUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GenTableColumnListRelationFilter = {
    every?: GenTableColumnWhereInput
    some?: GenTableColumnWhereInput
    none?: GenTableColumnWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenTableColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenTableCountOrderByAggregateInput = {
    tableId?: SortOrder
    tableName?: SortOrder
    tableComment?: SortOrder
    subTableName?: SortOrder
    subTableFkName?: SortOrder
    className?: SortOrder
    tplCategory?: SortOrder
    tplWebType?: SortOrder
    packageName?: SortOrder
    moduleName?: SortOrder
    businessName?: SortOrder
    functionName?: SortOrder
    functionAuthor?: SortOrder
    genType?: SortOrder
    genPath?: SortOrder
    options?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type GenTableAvgOrderByAggregateInput = {
    tableId?: SortOrder
  }

  export type GenTableMaxOrderByAggregateInput = {
    tableId?: SortOrder
    tableName?: SortOrder
    tableComment?: SortOrder
    subTableName?: SortOrder
    subTableFkName?: SortOrder
    className?: SortOrder
    tplCategory?: SortOrder
    tplWebType?: SortOrder
    packageName?: SortOrder
    moduleName?: SortOrder
    businessName?: SortOrder
    functionName?: SortOrder
    functionAuthor?: SortOrder
    genType?: SortOrder
    genPath?: SortOrder
    options?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type GenTableMinOrderByAggregateInput = {
    tableId?: SortOrder
    tableName?: SortOrder
    tableComment?: SortOrder
    subTableName?: SortOrder
    subTableFkName?: SortOrder
    className?: SortOrder
    tplCategory?: SortOrder
    tplWebType?: SortOrder
    packageName?: SortOrder
    moduleName?: SortOrder
    businessName?: SortOrder
    functionName?: SortOrder
    functionAuthor?: SortOrder
    genType?: SortOrder
    genPath?: SortOrder
    options?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type GenTableSumOrderByAggregateInput = {
    tableId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GenTableNullableRelationFilter = {
    is?: GenTableWhereInput | null
    isNot?: GenTableWhereInput | null
  }

  export type GenTableColumnCountOrderByAggregateInput = {
    columnId?: SortOrder
    tableId?: SortOrder
    columnName?: SortOrder
    columnComment?: SortOrder
    columnType?: SortOrder
    javaType?: SortOrder
    javaField?: SortOrder
    isPk?: SortOrder
    isIncrement?: SortOrder
    isRequired?: SortOrder
    isInsert?: SortOrder
    isEdit?: SortOrder
    isList?: SortOrder
    isQuery?: SortOrder
    queryType?: SortOrder
    htmlType?: SortOrder
    dictType?: SortOrder
    sort?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
  }

  export type GenTableColumnAvgOrderByAggregateInput = {
    columnId?: SortOrder
    tableId?: SortOrder
    sort?: SortOrder
  }

  export type GenTableColumnMaxOrderByAggregateInput = {
    columnId?: SortOrder
    tableId?: SortOrder
    columnName?: SortOrder
    columnComment?: SortOrder
    columnType?: SortOrder
    javaType?: SortOrder
    javaField?: SortOrder
    isPk?: SortOrder
    isIncrement?: SortOrder
    isRequired?: SortOrder
    isInsert?: SortOrder
    isEdit?: SortOrder
    isList?: SortOrder
    isQuery?: SortOrder
    queryType?: SortOrder
    htmlType?: SortOrder
    dictType?: SortOrder
    sort?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
  }

  export type GenTableColumnMinOrderByAggregateInput = {
    columnId?: SortOrder
    tableId?: SortOrder
    columnName?: SortOrder
    columnComment?: SortOrder
    columnType?: SortOrder
    javaType?: SortOrder
    javaField?: SortOrder
    isPk?: SortOrder
    isIncrement?: SortOrder
    isRequired?: SortOrder
    isInsert?: SortOrder
    isEdit?: SortOrder
    isList?: SortOrder
    isQuery?: SortOrder
    queryType?: SortOrder
    htmlType?: SortOrder
    dictType?: SortOrder
    sort?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
  }

  export type GenTableColumnSumOrderByAggregateInput = {
    columnId?: SortOrder
    tableId?: SortOrder
    sort?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SysConfigCountOrderByAggregateInput = {
    configId?: SortOrder
    configName?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysConfigAvgOrderByAggregateInput = {
    configId?: SortOrder
  }

  export type SysConfigMaxOrderByAggregateInput = {
    configId?: SortOrder
    configName?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysConfigMinOrderByAggregateInput = {
    configId?: SortOrder
    configName?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysConfigSumOrderByAggregateInput = {
    configId?: SortOrder
  }

  export type SysUserListRelationFilter = {
    every?: SysUserWhereInput
    some?: SysUserWhereInput
    none?: SysUserWhereInput
  }

  export type SysRoleDeptListRelationFilter = {
    every?: SysRoleDeptWhereInput
    some?: SysRoleDeptWhereInput
    none?: SysRoleDeptWhereInput
  }

  export type SysUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SysRoleDeptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SysDeptCountOrderByAggregateInput = {
    deptId?: SortOrder
    parentId?: SortOrder
    ancestors?: SortOrder
    deptName?: SortOrder
    orderNum?: SortOrder
    leader?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
  }

  export type SysDeptAvgOrderByAggregateInput = {
    deptId?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
  }

  export type SysDeptMaxOrderByAggregateInput = {
    deptId?: SortOrder
    parentId?: SortOrder
    ancestors?: SortOrder
    deptName?: SortOrder
    orderNum?: SortOrder
    leader?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
  }

  export type SysDeptMinOrderByAggregateInput = {
    deptId?: SortOrder
    parentId?: SortOrder
    ancestors?: SortOrder
    deptName?: SortOrder
    orderNum?: SortOrder
    leader?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
  }

  export type SysDeptSumOrderByAggregateInput = {
    deptId?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
  }

  export type SysDictTypeNullableRelationFilter = {
    is?: SysDictTypeWhereInput | null
    isNot?: SysDictTypeWhereInput | null
  }

  export type SysDictDataCountOrderByAggregateInput = {
    dictCode?: SortOrder
    dictSort?: SortOrder
    dictLabel?: SortOrder
    dictValue?: SortOrder
    dictType?: SortOrder
    cssClass?: SortOrder
    listClass?: SortOrder
    isDefault?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysDictDataAvgOrderByAggregateInput = {
    dictCode?: SortOrder
    dictSort?: SortOrder
  }

  export type SysDictDataMaxOrderByAggregateInput = {
    dictCode?: SortOrder
    dictSort?: SortOrder
    dictLabel?: SortOrder
    dictValue?: SortOrder
    dictType?: SortOrder
    cssClass?: SortOrder
    listClass?: SortOrder
    isDefault?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysDictDataMinOrderByAggregateInput = {
    dictCode?: SortOrder
    dictSort?: SortOrder
    dictLabel?: SortOrder
    dictValue?: SortOrder
    dictType?: SortOrder
    cssClass?: SortOrder
    listClass?: SortOrder
    isDefault?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysDictDataSumOrderByAggregateInput = {
    dictCode?: SortOrder
    dictSort?: SortOrder
  }

  export type SysDictDataListRelationFilter = {
    every?: SysDictDataWhereInput
    some?: SysDictDataWhereInput
    none?: SysDictDataWhereInput
  }

  export type SysDictDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SysDictTypeCountOrderByAggregateInput = {
    dictId?: SortOrder
    dictName?: SortOrder
    dictType?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysDictTypeAvgOrderByAggregateInput = {
    dictId?: SortOrder
  }

  export type SysDictTypeMaxOrderByAggregateInput = {
    dictId?: SortOrder
    dictName?: SortOrder
    dictType?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysDictTypeMinOrderByAggregateInput = {
    dictId?: SortOrder
    dictName?: SortOrder
    dictType?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysDictTypeSumOrderByAggregateInput = {
    dictId?: SortOrder
  }

  export type SysLogininforCountOrderByAggregateInput = {
    infoId?: SortOrder
    userName?: SortOrder
    ipaddr?: SortOrder
    loginLocation?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    status?: SortOrder
    msg?: SortOrder
    loginTime?: SortOrder
  }

  export type SysLogininforAvgOrderByAggregateInput = {
    infoId?: SortOrder
  }

  export type SysLogininforMaxOrderByAggregateInput = {
    infoId?: SortOrder
    userName?: SortOrder
    ipaddr?: SortOrder
    loginLocation?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    status?: SortOrder
    msg?: SortOrder
    loginTime?: SortOrder
  }

  export type SysLogininforMinOrderByAggregateInput = {
    infoId?: SortOrder
    userName?: SortOrder
    ipaddr?: SortOrder
    loginLocation?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    status?: SortOrder
    msg?: SortOrder
    loginTime?: SortOrder
  }

  export type SysLogininforSumOrderByAggregateInput = {
    infoId?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SysRoleMenuListRelationFilter = {
    every?: SysRoleMenuWhereInput
    some?: SysRoleMenuWhereInput
    none?: SysRoleMenuWhereInput
  }

  export type SysRoleMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SysMenuCountOrderByAggregateInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
    path?: SortOrder
    component?: SortOrder
    query?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
    menuType?: SortOrder
    visible?: SortOrder
    status?: SortOrder
    perms?: SortOrder
    icon?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysMenuAvgOrderByAggregateInput = {
    menuId?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
  }

  export type SysMenuMaxOrderByAggregateInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
    path?: SortOrder
    component?: SortOrder
    query?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
    menuType?: SortOrder
    visible?: SortOrder
    status?: SortOrder
    perms?: SortOrder
    icon?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysMenuMinOrderByAggregateInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
    path?: SortOrder
    component?: SortOrder
    query?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
    menuType?: SortOrder
    visible?: SortOrder
    status?: SortOrder
    perms?: SortOrder
    icon?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysMenuSumOrderByAggregateInput = {
    menuId?: SortOrder
    parentId?: SortOrder
    orderNum?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SysNoticeCountOrderByAggregateInput = {
    noticeId?: SortOrder
    noticeTitle?: SortOrder
    noticeType?: SortOrder
    noticeContent?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysNoticeAvgOrderByAggregateInput = {
    noticeId?: SortOrder
  }

  export type SysNoticeMaxOrderByAggregateInput = {
    noticeId?: SortOrder
    noticeTitle?: SortOrder
    noticeType?: SortOrder
    noticeContent?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysNoticeMinOrderByAggregateInput = {
    noticeId?: SortOrder
    noticeTitle?: SortOrder
    noticeType?: SortOrder
    noticeContent?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysNoticeSumOrderByAggregateInput = {
    noticeId?: SortOrder
  }

  export type SysUserPostListRelationFilter = {
    every?: SysUserPostWhereInput
    some?: SysUserPostWhereInput
    none?: SysUserPostWhereInput
  }

  export type SysUserPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SysPostCountOrderByAggregateInput = {
    postId?: SortOrder
    postCode?: SortOrder
    postName?: SortOrder
    postSort?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysPostAvgOrderByAggregateInput = {
    postId?: SortOrder
    postSort?: SortOrder
  }

  export type SysPostMaxOrderByAggregateInput = {
    postId?: SortOrder
    postCode?: SortOrder
    postName?: SortOrder
    postSort?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysPostMinOrderByAggregateInput = {
    postId?: SortOrder
    postCode?: SortOrder
    postName?: SortOrder
    postSort?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysPostSumOrderByAggregateInput = {
    postId?: SortOrder
    postSort?: SortOrder
  }

  export type SysUserRelationFilter = {
    is?: SysUserWhereInput
    isNot?: SysUserWhereInput
  }

  export type SysPostRelationFilter = {
    is?: SysPostWhereInput
    isNot?: SysPostWhereInput
  }

  export type SysUserPostUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type SysUserPostCountOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SysUserPostAvgOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SysUserPostMaxOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SysUserPostMinOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SysUserPostSumOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SysRoleRelationFilter = {
    is?: SysRoleWhereInput
    isNot?: SysRoleWhereInput
  }

  export type SysDeptRelationFilter = {
    is?: SysDeptWhereInput
    isNot?: SysDeptWhereInput
  }

  export type SysRoleDeptRoleIdDeptIdCompoundUniqueInput = {
    roleId: number
    deptId: number
  }

  export type SysRoleDeptCountOrderByAggregateInput = {
    roleId?: SortOrder
    deptId?: SortOrder
  }

  export type SysRoleDeptAvgOrderByAggregateInput = {
    roleId?: SortOrder
    deptId?: SortOrder
  }

  export type SysRoleDeptMaxOrderByAggregateInput = {
    roleId?: SortOrder
    deptId?: SortOrder
  }

  export type SysRoleDeptMinOrderByAggregateInput = {
    roleId?: SortOrder
    deptId?: SortOrder
  }

  export type SysRoleDeptSumOrderByAggregateInput = {
    roleId?: SortOrder
    deptId?: SortOrder
  }

  export type SysMenuRelationFilter = {
    is?: SysMenuWhereInput
    isNot?: SysMenuWhereInput
  }

  export type SysRoleMenuRoleIdMenuIdCompoundUniqueInput = {
    roleId: number
    menuId: number
  }

  export type SysRoleMenuCountOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SysRoleMenuAvgOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SysRoleMenuMaxOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SysRoleMenuMinOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SysRoleMenuSumOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SysDeptNullableRelationFilter = {
    is?: SysDeptWhereInput | null
    isNot?: SysDeptWhereInput | null
  }

  export type SysUserRoleListRelationFilter = {
    every?: SysUserRoleWhereInput
    some?: SysUserRoleWhereInput
    none?: SysUserRoleWhereInput
  }

  export type SysUserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SysUserCountOrderByAggregateInput = {
    userId?: SortOrder
    deptId?: SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    userType?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    sex?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    status?: SortOrder
    loginIp?: SortOrder
    loginDate?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysUserAvgOrderByAggregateInput = {
    userId?: SortOrder
    deptId?: SortOrder
  }

  export type SysUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    deptId?: SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    userType?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    sex?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    status?: SortOrder
    loginIp?: SortOrder
    loginDate?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysUserMinOrderByAggregateInput = {
    userId?: SortOrder
    deptId?: SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    userType?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    sex?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    status?: SortOrder
    loginIp?: SortOrder
    loginDate?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysUserSumOrderByAggregateInput = {
    userId?: SortOrder
    deptId?: SortOrder
  }

  export type SysRoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    roleKey?: SortOrder
    roleSort?: SortOrder
    dataScope?: SortOrder
    menuCheckStrictly?: SortOrder
    deptCheckStrictly?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysRoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
    roleSort?: SortOrder
    menuCheckStrictly?: SortOrder
    deptCheckStrictly?: SortOrder
  }

  export type SysRoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    roleKey?: SortOrder
    roleSort?: SortOrder
    dataScope?: SortOrder
    menuCheckStrictly?: SortOrder
    deptCheckStrictly?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysRoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    roleKey?: SortOrder
    roleSort?: SortOrder
    dataScope?: SortOrder
    menuCheckStrictly?: SortOrder
    deptCheckStrictly?: SortOrder
    status?: SortOrder
    createBy?: SortOrder
    createTime?: SortOrder
    updateBy?: SortOrder
    updateTime?: SortOrder
    remark?: SortOrder
  }

  export type SysRoleSumOrderByAggregateInput = {
    roleId?: SortOrder
    roleSort?: SortOrder
    menuCheckStrictly?: SortOrder
    deptCheckStrictly?: SortOrder
  }

  export type SysUserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type SysUserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SysUserRoleAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SysUserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SysUserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SysUserRoleSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type GenTableColumnCreateNestedManyWithoutTableInput = {
    create?: XOR<GenTableColumnCreateWithoutTableInput, GenTableColumnUncheckedCreateWithoutTableInput> | GenTableColumnCreateWithoutTableInput[] | GenTableColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GenTableColumnCreateOrConnectWithoutTableInput | GenTableColumnCreateOrConnectWithoutTableInput[]
    createMany?: GenTableColumnCreateManyTableInputEnvelope
    connect?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
  }

  export type GenTableColumnUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<GenTableColumnCreateWithoutTableInput, GenTableColumnUncheckedCreateWithoutTableInput> | GenTableColumnCreateWithoutTableInput[] | GenTableColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GenTableColumnCreateOrConnectWithoutTableInput | GenTableColumnCreateOrConnectWithoutTableInput[]
    createMany?: GenTableColumnCreateManyTableInputEnvelope
    connect?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GenTableColumnUpdateManyWithoutTableNestedInput = {
    create?: XOR<GenTableColumnCreateWithoutTableInput, GenTableColumnUncheckedCreateWithoutTableInput> | GenTableColumnCreateWithoutTableInput[] | GenTableColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GenTableColumnCreateOrConnectWithoutTableInput | GenTableColumnCreateOrConnectWithoutTableInput[]
    upsert?: GenTableColumnUpsertWithWhereUniqueWithoutTableInput | GenTableColumnUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: GenTableColumnCreateManyTableInputEnvelope
    set?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    disconnect?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    delete?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    connect?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    update?: GenTableColumnUpdateWithWhereUniqueWithoutTableInput | GenTableColumnUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: GenTableColumnUpdateManyWithWhereWithoutTableInput | GenTableColumnUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: GenTableColumnScalarWhereInput | GenTableColumnScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenTableColumnUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<GenTableColumnCreateWithoutTableInput, GenTableColumnUncheckedCreateWithoutTableInput> | GenTableColumnCreateWithoutTableInput[] | GenTableColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: GenTableColumnCreateOrConnectWithoutTableInput | GenTableColumnCreateOrConnectWithoutTableInput[]
    upsert?: GenTableColumnUpsertWithWhereUniqueWithoutTableInput | GenTableColumnUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: GenTableColumnCreateManyTableInputEnvelope
    set?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    disconnect?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    delete?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    connect?: GenTableColumnWhereUniqueInput | GenTableColumnWhereUniqueInput[]
    update?: GenTableColumnUpdateWithWhereUniqueWithoutTableInput | GenTableColumnUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: GenTableColumnUpdateManyWithWhereWithoutTableInput | GenTableColumnUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: GenTableColumnScalarWhereInput | GenTableColumnScalarWhereInput[]
  }

  export type GenTableCreateNestedOneWithoutTableColumnsInput = {
    create?: XOR<GenTableCreateWithoutTableColumnsInput, GenTableUncheckedCreateWithoutTableColumnsInput>
    connectOrCreate?: GenTableCreateOrConnectWithoutTableColumnsInput
    connect?: GenTableWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenTableUpdateOneWithoutTableColumnsNestedInput = {
    create?: XOR<GenTableCreateWithoutTableColumnsInput, GenTableUncheckedCreateWithoutTableColumnsInput>
    connectOrCreate?: GenTableCreateOrConnectWithoutTableColumnsInput
    upsert?: GenTableUpsertWithoutTableColumnsInput
    disconnect?: GenTableWhereInput | boolean
    delete?: GenTableWhereInput | boolean
    connect?: GenTableWhereUniqueInput
    update?: XOR<XOR<GenTableUpdateToOneWithWhereWithoutTableColumnsInput, GenTableUpdateWithoutTableColumnsInput>, GenTableUncheckedUpdateWithoutTableColumnsInput>
  }

  export type SysUserCreateNestedManyWithoutDeptInput = {
    create?: XOR<SysUserCreateWithoutDeptInput, SysUserUncheckedCreateWithoutDeptInput> | SysUserCreateWithoutDeptInput[] | SysUserUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysUserCreateOrConnectWithoutDeptInput | SysUserCreateOrConnectWithoutDeptInput[]
    createMany?: SysUserCreateManyDeptInputEnvelope
    connect?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
  }

  export type SysRoleDeptCreateNestedManyWithoutDeptInput = {
    create?: XOR<SysRoleDeptCreateWithoutDeptInput, SysRoleDeptUncheckedCreateWithoutDeptInput> | SysRoleDeptCreateWithoutDeptInput[] | SysRoleDeptUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutDeptInput | SysRoleDeptCreateOrConnectWithoutDeptInput[]
    createMany?: SysRoleDeptCreateManyDeptInputEnvelope
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
  }

  export type SysUserUncheckedCreateNestedManyWithoutDeptInput = {
    create?: XOR<SysUserCreateWithoutDeptInput, SysUserUncheckedCreateWithoutDeptInput> | SysUserCreateWithoutDeptInput[] | SysUserUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysUserCreateOrConnectWithoutDeptInput | SysUserCreateOrConnectWithoutDeptInput[]
    createMany?: SysUserCreateManyDeptInputEnvelope
    connect?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
  }

  export type SysRoleDeptUncheckedCreateNestedManyWithoutDeptInput = {
    create?: XOR<SysRoleDeptCreateWithoutDeptInput, SysRoleDeptUncheckedCreateWithoutDeptInput> | SysRoleDeptCreateWithoutDeptInput[] | SysRoleDeptUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutDeptInput | SysRoleDeptCreateOrConnectWithoutDeptInput[]
    createMany?: SysRoleDeptCreateManyDeptInputEnvelope
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
  }

  export type SysUserUpdateManyWithoutDeptNestedInput = {
    create?: XOR<SysUserCreateWithoutDeptInput, SysUserUncheckedCreateWithoutDeptInput> | SysUserCreateWithoutDeptInput[] | SysUserUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysUserCreateOrConnectWithoutDeptInput | SysUserCreateOrConnectWithoutDeptInput[]
    upsert?: SysUserUpsertWithWhereUniqueWithoutDeptInput | SysUserUpsertWithWhereUniqueWithoutDeptInput[]
    createMany?: SysUserCreateManyDeptInputEnvelope
    set?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    disconnect?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    delete?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    connect?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    update?: SysUserUpdateWithWhereUniqueWithoutDeptInput | SysUserUpdateWithWhereUniqueWithoutDeptInput[]
    updateMany?: SysUserUpdateManyWithWhereWithoutDeptInput | SysUserUpdateManyWithWhereWithoutDeptInput[]
    deleteMany?: SysUserScalarWhereInput | SysUserScalarWhereInput[]
  }

  export type SysRoleDeptUpdateManyWithoutDeptNestedInput = {
    create?: XOR<SysRoleDeptCreateWithoutDeptInput, SysRoleDeptUncheckedCreateWithoutDeptInput> | SysRoleDeptCreateWithoutDeptInput[] | SysRoleDeptUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutDeptInput | SysRoleDeptCreateOrConnectWithoutDeptInput[]
    upsert?: SysRoleDeptUpsertWithWhereUniqueWithoutDeptInput | SysRoleDeptUpsertWithWhereUniqueWithoutDeptInput[]
    createMany?: SysRoleDeptCreateManyDeptInputEnvelope
    set?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    disconnect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    delete?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    update?: SysRoleDeptUpdateWithWhereUniqueWithoutDeptInput | SysRoleDeptUpdateWithWhereUniqueWithoutDeptInput[]
    updateMany?: SysRoleDeptUpdateManyWithWhereWithoutDeptInput | SysRoleDeptUpdateManyWithWhereWithoutDeptInput[]
    deleteMany?: SysRoleDeptScalarWhereInput | SysRoleDeptScalarWhereInput[]
  }

  export type SysUserUncheckedUpdateManyWithoutDeptNestedInput = {
    create?: XOR<SysUserCreateWithoutDeptInput, SysUserUncheckedCreateWithoutDeptInput> | SysUserCreateWithoutDeptInput[] | SysUserUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysUserCreateOrConnectWithoutDeptInput | SysUserCreateOrConnectWithoutDeptInput[]
    upsert?: SysUserUpsertWithWhereUniqueWithoutDeptInput | SysUserUpsertWithWhereUniqueWithoutDeptInput[]
    createMany?: SysUserCreateManyDeptInputEnvelope
    set?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    disconnect?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    delete?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    connect?: SysUserWhereUniqueInput | SysUserWhereUniqueInput[]
    update?: SysUserUpdateWithWhereUniqueWithoutDeptInput | SysUserUpdateWithWhereUniqueWithoutDeptInput[]
    updateMany?: SysUserUpdateManyWithWhereWithoutDeptInput | SysUserUpdateManyWithWhereWithoutDeptInput[]
    deleteMany?: SysUserScalarWhereInput | SysUserScalarWhereInput[]
  }

  export type SysRoleDeptUncheckedUpdateManyWithoutDeptNestedInput = {
    create?: XOR<SysRoleDeptCreateWithoutDeptInput, SysRoleDeptUncheckedCreateWithoutDeptInput> | SysRoleDeptCreateWithoutDeptInput[] | SysRoleDeptUncheckedCreateWithoutDeptInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutDeptInput | SysRoleDeptCreateOrConnectWithoutDeptInput[]
    upsert?: SysRoleDeptUpsertWithWhereUniqueWithoutDeptInput | SysRoleDeptUpsertWithWhereUniqueWithoutDeptInput[]
    createMany?: SysRoleDeptCreateManyDeptInputEnvelope
    set?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    disconnect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    delete?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    update?: SysRoleDeptUpdateWithWhereUniqueWithoutDeptInput | SysRoleDeptUpdateWithWhereUniqueWithoutDeptInput[]
    updateMany?: SysRoleDeptUpdateManyWithWhereWithoutDeptInput | SysRoleDeptUpdateManyWithWhereWithoutDeptInput[]
    deleteMany?: SysRoleDeptScalarWhereInput | SysRoleDeptScalarWhereInput[]
  }

  export type SysDictTypeCreateNestedOneWithoutDictDatasInput = {
    create?: XOR<SysDictTypeCreateWithoutDictDatasInput, SysDictTypeUncheckedCreateWithoutDictDatasInput>
    connectOrCreate?: SysDictTypeCreateOrConnectWithoutDictDatasInput
    connect?: SysDictTypeWhereUniqueInput
  }

  export type SysDictTypeUpdateOneWithoutDictDatasNestedInput = {
    create?: XOR<SysDictTypeCreateWithoutDictDatasInput, SysDictTypeUncheckedCreateWithoutDictDatasInput>
    connectOrCreate?: SysDictTypeCreateOrConnectWithoutDictDatasInput
    upsert?: SysDictTypeUpsertWithoutDictDatasInput
    disconnect?: SysDictTypeWhereInput | boolean
    delete?: SysDictTypeWhereInput | boolean
    connect?: SysDictTypeWhereUniqueInput
    update?: XOR<XOR<SysDictTypeUpdateToOneWithWhereWithoutDictDatasInput, SysDictTypeUpdateWithoutDictDatasInput>, SysDictTypeUncheckedUpdateWithoutDictDatasInput>
  }

  export type SysDictDataCreateNestedManyWithoutSysDictTypeInput = {
    create?: XOR<SysDictDataCreateWithoutSysDictTypeInput, SysDictDataUncheckedCreateWithoutSysDictTypeInput> | SysDictDataCreateWithoutSysDictTypeInput[] | SysDictDataUncheckedCreateWithoutSysDictTypeInput[]
    connectOrCreate?: SysDictDataCreateOrConnectWithoutSysDictTypeInput | SysDictDataCreateOrConnectWithoutSysDictTypeInput[]
    createMany?: SysDictDataCreateManySysDictTypeInputEnvelope
    connect?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
  }

  export type SysDictDataUncheckedCreateNestedManyWithoutSysDictTypeInput = {
    create?: XOR<SysDictDataCreateWithoutSysDictTypeInput, SysDictDataUncheckedCreateWithoutSysDictTypeInput> | SysDictDataCreateWithoutSysDictTypeInput[] | SysDictDataUncheckedCreateWithoutSysDictTypeInput[]
    connectOrCreate?: SysDictDataCreateOrConnectWithoutSysDictTypeInput | SysDictDataCreateOrConnectWithoutSysDictTypeInput[]
    createMany?: SysDictDataCreateManySysDictTypeInputEnvelope
    connect?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
  }

  export type SysDictDataUpdateManyWithoutSysDictTypeNestedInput = {
    create?: XOR<SysDictDataCreateWithoutSysDictTypeInput, SysDictDataUncheckedCreateWithoutSysDictTypeInput> | SysDictDataCreateWithoutSysDictTypeInput[] | SysDictDataUncheckedCreateWithoutSysDictTypeInput[]
    connectOrCreate?: SysDictDataCreateOrConnectWithoutSysDictTypeInput | SysDictDataCreateOrConnectWithoutSysDictTypeInput[]
    upsert?: SysDictDataUpsertWithWhereUniqueWithoutSysDictTypeInput | SysDictDataUpsertWithWhereUniqueWithoutSysDictTypeInput[]
    createMany?: SysDictDataCreateManySysDictTypeInputEnvelope
    set?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    disconnect?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    delete?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    connect?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    update?: SysDictDataUpdateWithWhereUniqueWithoutSysDictTypeInput | SysDictDataUpdateWithWhereUniqueWithoutSysDictTypeInput[]
    updateMany?: SysDictDataUpdateManyWithWhereWithoutSysDictTypeInput | SysDictDataUpdateManyWithWhereWithoutSysDictTypeInput[]
    deleteMany?: SysDictDataScalarWhereInput | SysDictDataScalarWhereInput[]
  }

  export type SysDictDataUncheckedUpdateManyWithoutSysDictTypeNestedInput = {
    create?: XOR<SysDictDataCreateWithoutSysDictTypeInput, SysDictDataUncheckedCreateWithoutSysDictTypeInput> | SysDictDataCreateWithoutSysDictTypeInput[] | SysDictDataUncheckedCreateWithoutSysDictTypeInput[]
    connectOrCreate?: SysDictDataCreateOrConnectWithoutSysDictTypeInput | SysDictDataCreateOrConnectWithoutSysDictTypeInput[]
    upsert?: SysDictDataUpsertWithWhereUniqueWithoutSysDictTypeInput | SysDictDataUpsertWithWhereUniqueWithoutSysDictTypeInput[]
    createMany?: SysDictDataCreateManySysDictTypeInputEnvelope
    set?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    disconnect?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    delete?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    connect?: SysDictDataWhereUniqueInput | SysDictDataWhereUniqueInput[]
    update?: SysDictDataUpdateWithWhereUniqueWithoutSysDictTypeInput | SysDictDataUpdateWithWhereUniqueWithoutSysDictTypeInput[]
    updateMany?: SysDictDataUpdateManyWithWhereWithoutSysDictTypeInput | SysDictDataUpdateManyWithWhereWithoutSysDictTypeInput[]
    deleteMany?: SysDictDataScalarWhereInput | SysDictDataScalarWhereInput[]
  }

  export type SysRoleMenuCreateNestedManyWithoutMenuInput = {
    create?: XOR<SysRoleMenuCreateWithoutMenuInput, SysRoleMenuUncheckedCreateWithoutMenuInput> | SysRoleMenuCreateWithoutMenuInput[] | SysRoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutMenuInput | SysRoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: SysRoleMenuCreateManyMenuInputEnvelope
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
  }

  export type SysRoleMenuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<SysRoleMenuCreateWithoutMenuInput, SysRoleMenuUncheckedCreateWithoutMenuInput> | SysRoleMenuCreateWithoutMenuInput[] | SysRoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutMenuInput | SysRoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: SysRoleMenuCreateManyMenuInputEnvelope
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SysRoleMenuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<SysRoleMenuCreateWithoutMenuInput, SysRoleMenuUncheckedCreateWithoutMenuInput> | SysRoleMenuCreateWithoutMenuInput[] | SysRoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutMenuInput | SysRoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: SysRoleMenuUpsertWithWhereUniqueWithoutMenuInput | SysRoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: SysRoleMenuCreateManyMenuInputEnvelope
    set?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    disconnect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    delete?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    update?: SysRoleMenuUpdateWithWhereUniqueWithoutMenuInput | SysRoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: SysRoleMenuUpdateManyWithWhereWithoutMenuInput | SysRoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: SysRoleMenuScalarWhereInput | SysRoleMenuScalarWhereInput[]
  }

  export type SysRoleMenuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<SysRoleMenuCreateWithoutMenuInput, SysRoleMenuUncheckedCreateWithoutMenuInput> | SysRoleMenuCreateWithoutMenuInput[] | SysRoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutMenuInput | SysRoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: SysRoleMenuUpsertWithWhereUniqueWithoutMenuInput | SysRoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: SysRoleMenuCreateManyMenuInputEnvelope
    set?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    disconnect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    delete?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    update?: SysRoleMenuUpdateWithWhereUniqueWithoutMenuInput | SysRoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: SysRoleMenuUpdateManyWithWhereWithoutMenuInput | SysRoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: SysRoleMenuScalarWhereInput | SysRoleMenuScalarWhereInput[]
  }

  export type SysUserPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SysUserPostCreateWithoutPostInput, SysUserPostUncheckedCreateWithoutPostInput> | SysUserPostCreateWithoutPostInput[] | SysUserPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutPostInput | SysUserPostCreateOrConnectWithoutPostInput[]
    createMany?: SysUserPostCreateManyPostInputEnvelope
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
  }

  export type SysUserPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SysUserPostCreateWithoutPostInput, SysUserPostUncheckedCreateWithoutPostInput> | SysUserPostCreateWithoutPostInput[] | SysUserPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutPostInput | SysUserPostCreateOrConnectWithoutPostInput[]
    createMany?: SysUserPostCreateManyPostInputEnvelope
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
  }

  export type SysUserPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SysUserPostCreateWithoutPostInput, SysUserPostUncheckedCreateWithoutPostInput> | SysUserPostCreateWithoutPostInput[] | SysUserPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutPostInput | SysUserPostCreateOrConnectWithoutPostInput[]
    upsert?: SysUserPostUpsertWithWhereUniqueWithoutPostInput | SysUserPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SysUserPostCreateManyPostInputEnvelope
    set?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    disconnect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    delete?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    update?: SysUserPostUpdateWithWhereUniqueWithoutPostInput | SysUserPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SysUserPostUpdateManyWithWhereWithoutPostInput | SysUserPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SysUserPostScalarWhereInput | SysUserPostScalarWhereInput[]
  }

  export type SysUserPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SysUserPostCreateWithoutPostInput, SysUserPostUncheckedCreateWithoutPostInput> | SysUserPostCreateWithoutPostInput[] | SysUserPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutPostInput | SysUserPostCreateOrConnectWithoutPostInput[]
    upsert?: SysUserPostUpsertWithWhereUniqueWithoutPostInput | SysUserPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SysUserPostCreateManyPostInputEnvelope
    set?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    disconnect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    delete?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    update?: SysUserPostUpdateWithWhereUniqueWithoutPostInput | SysUserPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SysUserPostUpdateManyWithWhereWithoutPostInput | SysUserPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SysUserPostScalarWhereInput | SysUserPostScalarWhereInput[]
  }

  export type SysUserCreateNestedOneWithoutPostsInput = {
    create?: XOR<SysUserCreateWithoutPostsInput, SysUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SysUserCreateOrConnectWithoutPostsInput
    connect?: SysUserWhereUniqueInput
  }

  export type SysPostCreateNestedOneWithoutUsersInput = {
    create?: XOR<SysPostCreateWithoutUsersInput, SysPostUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SysPostCreateOrConnectWithoutUsersInput
    connect?: SysPostWhereUniqueInput
  }

  export type SysUserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<SysUserCreateWithoutPostsInput, SysUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SysUserCreateOrConnectWithoutPostsInput
    upsert?: SysUserUpsertWithoutPostsInput
    connect?: SysUserWhereUniqueInput
    update?: XOR<XOR<SysUserUpdateToOneWithWhereWithoutPostsInput, SysUserUpdateWithoutPostsInput>, SysUserUncheckedUpdateWithoutPostsInput>
  }

  export type SysPostUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SysPostCreateWithoutUsersInput, SysPostUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SysPostCreateOrConnectWithoutUsersInput
    upsert?: SysPostUpsertWithoutUsersInput
    connect?: SysPostWhereUniqueInput
    update?: XOR<XOR<SysPostUpdateToOneWithWhereWithoutUsersInput, SysPostUpdateWithoutUsersInput>, SysPostUncheckedUpdateWithoutUsersInput>
  }

  export type SysRoleCreateNestedOneWithoutDeptsInput = {
    create?: XOR<SysRoleCreateWithoutDeptsInput, SysRoleUncheckedCreateWithoutDeptsInput>
    connectOrCreate?: SysRoleCreateOrConnectWithoutDeptsInput
    connect?: SysRoleWhereUniqueInput
  }

  export type SysDeptCreateNestedOneWithoutRolesInput = {
    create?: XOR<SysDeptCreateWithoutRolesInput, SysDeptUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SysDeptCreateOrConnectWithoutRolesInput
    connect?: SysDeptWhereUniqueInput
  }

  export type SysRoleUpdateOneRequiredWithoutDeptsNestedInput = {
    create?: XOR<SysRoleCreateWithoutDeptsInput, SysRoleUncheckedCreateWithoutDeptsInput>
    connectOrCreate?: SysRoleCreateOrConnectWithoutDeptsInput
    upsert?: SysRoleUpsertWithoutDeptsInput
    connect?: SysRoleWhereUniqueInput
    update?: XOR<XOR<SysRoleUpdateToOneWithWhereWithoutDeptsInput, SysRoleUpdateWithoutDeptsInput>, SysRoleUncheckedUpdateWithoutDeptsInput>
  }

  export type SysDeptUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<SysDeptCreateWithoutRolesInput, SysDeptUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SysDeptCreateOrConnectWithoutRolesInput
    upsert?: SysDeptUpsertWithoutRolesInput
    connect?: SysDeptWhereUniqueInput
    update?: XOR<XOR<SysDeptUpdateToOneWithWhereWithoutRolesInput, SysDeptUpdateWithoutRolesInput>, SysDeptUncheckedUpdateWithoutRolesInput>
  }

  export type SysMenuCreateNestedOneWithoutRolesInput = {
    create?: XOR<SysMenuCreateWithoutRolesInput, SysMenuUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SysMenuCreateOrConnectWithoutRolesInput
    connect?: SysMenuWhereUniqueInput
  }

  export type SysRoleCreateNestedOneWithoutMenusInput = {
    create?: XOR<SysRoleCreateWithoutMenusInput, SysRoleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: SysRoleCreateOrConnectWithoutMenusInput
    connect?: SysRoleWhereUniqueInput
  }

  export type SysMenuUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<SysMenuCreateWithoutRolesInput, SysMenuUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SysMenuCreateOrConnectWithoutRolesInput
    upsert?: SysMenuUpsertWithoutRolesInput
    connect?: SysMenuWhereUniqueInput
    update?: XOR<XOR<SysMenuUpdateToOneWithWhereWithoutRolesInput, SysMenuUpdateWithoutRolesInput>, SysMenuUncheckedUpdateWithoutRolesInput>
  }

  export type SysRoleUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<SysRoleCreateWithoutMenusInput, SysRoleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: SysRoleCreateOrConnectWithoutMenusInput
    upsert?: SysRoleUpsertWithoutMenusInput
    connect?: SysRoleWhereUniqueInput
    update?: XOR<XOR<SysRoleUpdateToOneWithWhereWithoutMenusInput, SysRoleUpdateWithoutMenusInput>, SysRoleUncheckedUpdateWithoutMenusInput>
  }

  export type SysDeptCreateNestedOneWithoutUsersInput = {
    create?: XOR<SysDeptCreateWithoutUsersInput, SysDeptUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SysDeptCreateOrConnectWithoutUsersInput
    connect?: SysDeptWhereUniqueInput
  }

  export type SysUserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<SysUserRoleCreateWithoutUserInput, SysUserRoleUncheckedCreateWithoutUserInput> | SysUserRoleCreateWithoutUserInput[] | SysUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutUserInput | SysUserRoleCreateOrConnectWithoutUserInput[]
    createMany?: SysUserRoleCreateManyUserInputEnvelope
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
  }

  export type SysUserPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SysUserPostCreateWithoutUserInput, SysUserPostUncheckedCreateWithoutUserInput> | SysUserPostCreateWithoutUserInput[] | SysUserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutUserInput | SysUserPostCreateOrConnectWithoutUserInput[]
    createMany?: SysUserPostCreateManyUserInputEnvelope
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
  }

  export type SysUserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SysUserRoleCreateWithoutUserInput, SysUserRoleUncheckedCreateWithoutUserInput> | SysUserRoleCreateWithoutUserInput[] | SysUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutUserInput | SysUserRoleCreateOrConnectWithoutUserInput[]
    createMany?: SysUserRoleCreateManyUserInputEnvelope
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
  }

  export type SysUserPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SysUserPostCreateWithoutUserInput, SysUserPostUncheckedCreateWithoutUserInput> | SysUserPostCreateWithoutUserInput[] | SysUserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutUserInput | SysUserPostCreateOrConnectWithoutUserInput[]
    createMany?: SysUserPostCreateManyUserInputEnvelope
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
  }

  export type SysDeptUpdateOneWithoutUsersNestedInput = {
    create?: XOR<SysDeptCreateWithoutUsersInput, SysDeptUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SysDeptCreateOrConnectWithoutUsersInput
    upsert?: SysDeptUpsertWithoutUsersInput
    disconnect?: SysDeptWhereInput | boolean
    delete?: SysDeptWhereInput | boolean
    connect?: SysDeptWhereUniqueInput
    update?: XOR<XOR<SysDeptUpdateToOneWithWhereWithoutUsersInput, SysDeptUpdateWithoutUsersInput>, SysDeptUncheckedUpdateWithoutUsersInput>
  }

  export type SysUserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<SysUserRoleCreateWithoutUserInput, SysUserRoleUncheckedCreateWithoutUserInput> | SysUserRoleCreateWithoutUserInput[] | SysUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutUserInput | SysUserRoleCreateOrConnectWithoutUserInput[]
    upsert?: SysUserRoleUpsertWithWhereUniqueWithoutUserInput | SysUserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SysUserRoleCreateManyUserInputEnvelope
    set?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    disconnect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    delete?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    update?: SysUserRoleUpdateWithWhereUniqueWithoutUserInput | SysUserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SysUserRoleUpdateManyWithWhereWithoutUserInput | SysUserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SysUserRoleScalarWhereInput | SysUserRoleScalarWhereInput[]
  }

  export type SysUserPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SysUserPostCreateWithoutUserInput, SysUserPostUncheckedCreateWithoutUserInput> | SysUserPostCreateWithoutUserInput[] | SysUserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutUserInput | SysUserPostCreateOrConnectWithoutUserInput[]
    upsert?: SysUserPostUpsertWithWhereUniqueWithoutUserInput | SysUserPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SysUserPostCreateManyUserInputEnvelope
    set?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    disconnect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    delete?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    update?: SysUserPostUpdateWithWhereUniqueWithoutUserInput | SysUserPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SysUserPostUpdateManyWithWhereWithoutUserInput | SysUserPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SysUserPostScalarWhereInput | SysUserPostScalarWhereInput[]
  }

  export type SysUserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SysUserRoleCreateWithoutUserInput, SysUserRoleUncheckedCreateWithoutUserInput> | SysUserRoleCreateWithoutUserInput[] | SysUserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutUserInput | SysUserRoleCreateOrConnectWithoutUserInput[]
    upsert?: SysUserRoleUpsertWithWhereUniqueWithoutUserInput | SysUserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SysUserRoleCreateManyUserInputEnvelope
    set?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    disconnect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    delete?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    update?: SysUserRoleUpdateWithWhereUniqueWithoutUserInput | SysUserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SysUserRoleUpdateManyWithWhereWithoutUserInput | SysUserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SysUserRoleScalarWhereInput | SysUserRoleScalarWhereInput[]
  }

  export type SysUserPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SysUserPostCreateWithoutUserInput, SysUserPostUncheckedCreateWithoutUserInput> | SysUserPostCreateWithoutUserInput[] | SysUserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SysUserPostCreateOrConnectWithoutUserInput | SysUserPostCreateOrConnectWithoutUserInput[]
    upsert?: SysUserPostUpsertWithWhereUniqueWithoutUserInput | SysUserPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SysUserPostCreateManyUserInputEnvelope
    set?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    disconnect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    delete?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    connect?: SysUserPostWhereUniqueInput | SysUserPostWhereUniqueInput[]
    update?: SysUserPostUpdateWithWhereUniqueWithoutUserInput | SysUserPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SysUserPostUpdateManyWithWhereWithoutUserInput | SysUserPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SysUserPostScalarWhereInput | SysUserPostScalarWhereInput[]
  }

  export type SysUserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<SysUserRoleCreateWithoutRoleInput, SysUserRoleUncheckedCreateWithoutRoleInput> | SysUserRoleCreateWithoutRoleInput[] | SysUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutRoleInput | SysUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: SysUserRoleCreateManyRoleInputEnvelope
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
  }

  export type SysRoleMenuCreateNestedManyWithoutRoleInput = {
    create?: XOR<SysRoleMenuCreateWithoutRoleInput, SysRoleMenuUncheckedCreateWithoutRoleInput> | SysRoleMenuCreateWithoutRoleInput[] | SysRoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutRoleInput | SysRoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: SysRoleMenuCreateManyRoleInputEnvelope
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
  }

  export type SysRoleDeptCreateNestedManyWithoutRoleInput = {
    create?: XOR<SysRoleDeptCreateWithoutRoleInput, SysRoleDeptUncheckedCreateWithoutRoleInput> | SysRoleDeptCreateWithoutRoleInput[] | SysRoleDeptUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutRoleInput | SysRoleDeptCreateOrConnectWithoutRoleInput[]
    createMany?: SysRoleDeptCreateManyRoleInputEnvelope
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
  }

  export type SysUserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SysUserRoleCreateWithoutRoleInput, SysUserRoleUncheckedCreateWithoutRoleInput> | SysUserRoleCreateWithoutRoleInput[] | SysUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutRoleInput | SysUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: SysUserRoleCreateManyRoleInputEnvelope
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
  }

  export type SysRoleMenuUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SysRoleMenuCreateWithoutRoleInput, SysRoleMenuUncheckedCreateWithoutRoleInput> | SysRoleMenuCreateWithoutRoleInput[] | SysRoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutRoleInput | SysRoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: SysRoleMenuCreateManyRoleInputEnvelope
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
  }

  export type SysRoleDeptUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SysRoleDeptCreateWithoutRoleInput, SysRoleDeptUncheckedCreateWithoutRoleInput> | SysRoleDeptCreateWithoutRoleInput[] | SysRoleDeptUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutRoleInput | SysRoleDeptCreateOrConnectWithoutRoleInput[]
    createMany?: SysRoleDeptCreateManyRoleInputEnvelope
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
  }

  export type SysUserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SysUserRoleCreateWithoutRoleInput, SysUserRoleUncheckedCreateWithoutRoleInput> | SysUserRoleCreateWithoutRoleInput[] | SysUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutRoleInput | SysUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: SysUserRoleUpsertWithWhereUniqueWithoutRoleInput | SysUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SysUserRoleCreateManyRoleInputEnvelope
    set?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    disconnect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    delete?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    update?: SysUserRoleUpdateWithWhereUniqueWithoutRoleInput | SysUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SysUserRoleUpdateManyWithWhereWithoutRoleInput | SysUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SysUserRoleScalarWhereInput | SysUserRoleScalarWhereInput[]
  }

  export type SysRoleMenuUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SysRoleMenuCreateWithoutRoleInput, SysRoleMenuUncheckedCreateWithoutRoleInput> | SysRoleMenuCreateWithoutRoleInput[] | SysRoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutRoleInput | SysRoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: SysRoleMenuUpsertWithWhereUniqueWithoutRoleInput | SysRoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SysRoleMenuCreateManyRoleInputEnvelope
    set?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    disconnect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    delete?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    update?: SysRoleMenuUpdateWithWhereUniqueWithoutRoleInput | SysRoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SysRoleMenuUpdateManyWithWhereWithoutRoleInput | SysRoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SysRoleMenuScalarWhereInput | SysRoleMenuScalarWhereInput[]
  }

  export type SysRoleDeptUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SysRoleDeptCreateWithoutRoleInput, SysRoleDeptUncheckedCreateWithoutRoleInput> | SysRoleDeptCreateWithoutRoleInput[] | SysRoleDeptUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutRoleInput | SysRoleDeptCreateOrConnectWithoutRoleInput[]
    upsert?: SysRoleDeptUpsertWithWhereUniqueWithoutRoleInput | SysRoleDeptUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SysRoleDeptCreateManyRoleInputEnvelope
    set?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    disconnect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    delete?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    update?: SysRoleDeptUpdateWithWhereUniqueWithoutRoleInput | SysRoleDeptUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SysRoleDeptUpdateManyWithWhereWithoutRoleInput | SysRoleDeptUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SysRoleDeptScalarWhereInput | SysRoleDeptScalarWhereInput[]
  }

  export type SysUserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SysUserRoleCreateWithoutRoleInput, SysUserRoleUncheckedCreateWithoutRoleInput> | SysUserRoleCreateWithoutRoleInput[] | SysUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysUserRoleCreateOrConnectWithoutRoleInput | SysUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: SysUserRoleUpsertWithWhereUniqueWithoutRoleInput | SysUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SysUserRoleCreateManyRoleInputEnvelope
    set?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    disconnect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    delete?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    connect?: SysUserRoleWhereUniqueInput | SysUserRoleWhereUniqueInput[]
    update?: SysUserRoleUpdateWithWhereUniqueWithoutRoleInput | SysUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SysUserRoleUpdateManyWithWhereWithoutRoleInput | SysUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SysUserRoleScalarWhereInput | SysUserRoleScalarWhereInput[]
  }

  export type SysRoleMenuUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SysRoleMenuCreateWithoutRoleInput, SysRoleMenuUncheckedCreateWithoutRoleInput> | SysRoleMenuCreateWithoutRoleInput[] | SysRoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleMenuCreateOrConnectWithoutRoleInput | SysRoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: SysRoleMenuUpsertWithWhereUniqueWithoutRoleInput | SysRoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SysRoleMenuCreateManyRoleInputEnvelope
    set?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    disconnect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    delete?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    connect?: SysRoleMenuWhereUniqueInput | SysRoleMenuWhereUniqueInput[]
    update?: SysRoleMenuUpdateWithWhereUniqueWithoutRoleInput | SysRoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SysRoleMenuUpdateManyWithWhereWithoutRoleInput | SysRoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SysRoleMenuScalarWhereInput | SysRoleMenuScalarWhereInput[]
  }

  export type SysRoleDeptUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SysRoleDeptCreateWithoutRoleInput, SysRoleDeptUncheckedCreateWithoutRoleInput> | SysRoleDeptCreateWithoutRoleInput[] | SysRoleDeptUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SysRoleDeptCreateOrConnectWithoutRoleInput | SysRoleDeptCreateOrConnectWithoutRoleInput[]
    upsert?: SysRoleDeptUpsertWithWhereUniqueWithoutRoleInput | SysRoleDeptUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SysRoleDeptCreateManyRoleInputEnvelope
    set?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    disconnect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    delete?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    connect?: SysRoleDeptWhereUniqueInput | SysRoleDeptWhereUniqueInput[]
    update?: SysRoleDeptUpdateWithWhereUniqueWithoutRoleInput | SysRoleDeptUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SysRoleDeptUpdateManyWithWhereWithoutRoleInput | SysRoleDeptUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SysRoleDeptScalarWhereInput | SysRoleDeptScalarWhereInput[]
  }

  export type SysUserCreateNestedOneWithoutRolesInput = {
    create?: XOR<SysUserCreateWithoutRolesInput, SysUserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SysUserCreateOrConnectWithoutRolesInput
    connect?: SysUserWhereUniqueInput
  }

  export type SysRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<SysRoleCreateWithoutUsersInput, SysRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SysRoleCreateOrConnectWithoutUsersInput
    connect?: SysRoleWhereUniqueInput
  }

  export type SysUserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<SysUserCreateWithoutRolesInput, SysUserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SysUserCreateOrConnectWithoutRolesInput
    upsert?: SysUserUpsertWithoutRolesInput
    connect?: SysUserWhereUniqueInput
    update?: XOR<XOR<SysUserUpdateToOneWithWhereWithoutRolesInput, SysUserUpdateWithoutRolesInput>, SysUserUncheckedUpdateWithoutRolesInput>
  }

  export type SysRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SysRoleCreateWithoutUsersInput, SysRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SysRoleCreateOrConnectWithoutUsersInput
    upsert?: SysRoleUpsertWithoutUsersInput
    connect?: SysRoleWhereUniqueInput
    update?: XOR<XOR<SysRoleUpdateToOneWithWhereWithoutUsersInput, SysRoleUpdateWithoutUsersInput>, SysRoleUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type GenTableColumnCreateWithoutTableInput = {
    columnName?: string | null
    columnComment?: string | null
    columnType?: string | null
    javaType?: string | null
    javaField?: string | null
    isPk?: string | null
    isIncrement?: string | null
    isRequired?: string | null
    isInsert?: string | null
    isEdit?: string | null
    isList?: string | null
    isQuery?: string | null
    queryType?: string | null
    htmlType?: string | null
    dictType?: string | null
    sort?: number | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
  }

  export type GenTableColumnUncheckedCreateWithoutTableInput = {
    columnId?: number
    columnName?: string | null
    columnComment?: string | null
    columnType?: string | null
    javaType?: string | null
    javaField?: string | null
    isPk?: string | null
    isIncrement?: string | null
    isRequired?: string | null
    isInsert?: string | null
    isEdit?: string | null
    isList?: string | null
    isQuery?: string | null
    queryType?: string | null
    htmlType?: string | null
    dictType?: string | null
    sort?: number | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
  }

  export type GenTableColumnCreateOrConnectWithoutTableInput = {
    where: GenTableColumnWhereUniqueInput
    create: XOR<GenTableColumnCreateWithoutTableInput, GenTableColumnUncheckedCreateWithoutTableInput>
  }

  export type GenTableColumnCreateManyTableInputEnvelope = {
    data: GenTableColumnCreateManyTableInput | GenTableColumnCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type GenTableColumnUpsertWithWhereUniqueWithoutTableInput = {
    where: GenTableColumnWhereUniqueInput
    update: XOR<GenTableColumnUpdateWithoutTableInput, GenTableColumnUncheckedUpdateWithoutTableInput>
    create: XOR<GenTableColumnCreateWithoutTableInput, GenTableColumnUncheckedCreateWithoutTableInput>
  }

  export type GenTableColumnUpdateWithWhereUniqueWithoutTableInput = {
    where: GenTableColumnWhereUniqueInput
    data: XOR<GenTableColumnUpdateWithoutTableInput, GenTableColumnUncheckedUpdateWithoutTableInput>
  }

  export type GenTableColumnUpdateManyWithWhereWithoutTableInput = {
    where: GenTableColumnScalarWhereInput
    data: XOR<GenTableColumnUpdateManyMutationInput, GenTableColumnUncheckedUpdateManyWithoutTableInput>
  }

  export type GenTableColumnScalarWhereInput = {
    AND?: GenTableColumnScalarWhereInput | GenTableColumnScalarWhereInput[]
    OR?: GenTableColumnScalarWhereInput[]
    NOT?: GenTableColumnScalarWhereInput | GenTableColumnScalarWhereInput[]
    columnId?: IntFilter<"GenTableColumn"> | number
    tableId?: IntNullableFilter<"GenTableColumn"> | number | null
    columnName?: StringNullableFilter<"GenTableColumn"> | string | null
    columnComment?: StringNullableFilter<"GenTableColumn"> | string | null
    columnType?: StringNullableFilter<"GenTableColumn"> | string | null
    javaType?: StringNullableFilter<"GenTableColumn"> | string | null
    javaField?: StringNullableFilter<"GenTableColumn"> | string | null
    isPk?: StringNullableFilter<"GenTableColumn"> | string | null
    isIncrement?: StringNullableFilter<"GenTableColumn"> | string | null
    isRequired?: StringNullableFilter<"GenTableColumn"> | string | null
    isInsert?: StringNullableFilter<"GenTableColumn"> | string | null
    isEdit?: StringNullableFilter<"GenTableColumn"> | string | null
    isList?: StringNullableFilter<"GenTableColumn"> | string | null
    isQuery?: StringNullableFilter<"GenTableColumn"> | string | null
    queryType?: StringNullableFilter<"GenTableColumn"> | string | null
    htmlType?: StringNullableFilter<"GenTableColumn"> | string | null
    dictType?: StringNullableFilter<"GenTableColumn"> | string | null
    sort?: IntNullableFilter<"GenTableColumn"> | number | null
    createBy?: StringNullableFilter<"GenTableColumn"> | string | null
    createTime?: StringNullableFilter<"GenTableColumn"> | string | null
    updateBy?: StringNullableFilter<"GenTableColumn"> | string | null
    updateTime?: StringNullableFilter<"GenTableColumn"> | string | null
  }

  export type GenTableCreateWithoutTableColumnsInput = {
    tableName?: string | null
    tableComment?: string | null
    subTableName?: string | null
    subTableFkName?: string | null
    className?: string | null
    tplCategory?: string | null
    tplWebType?: string | null
    packageName?: string | null
    moduleName?: string | null
    businessName?: string | null
    functionName?: string | null
    functionAuthor?: string | null
    genType?: string | null
    genPath?: string | null
    options?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type GenTableUncheckedCreateWithoutTableColumnsInput = {
    tableId?: number
    tableName?: string | null
    tableComment?: string | null
    subTableName?: string | null
    subTableFkName?: string | null
    className?: string | null
    tplCategory?: string | null
    tplWebType?: string | null
    packageName?: string | null
    moduleName?: string | null
    businessName?: string | null
    functionName?: string | null
    functionAuthor?: string | null
    genType?: string | null
    genPath?: string | null
    options?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type GenTableCreateOrConnectWithoutTableColumnsInput = {
    where: GenTableWhereUniqueInput
    create: XOR<GenTableCreateWithoutTableColumnsInput, GenTableUncheckedCreateWithoutTableColumnsInput>
  }

  export type GenTableUpsertWithoutTableColumnsInput = {
    update: XOR<GenTableUpdateWithoutTableColumnsInput, GenTableUncheckedUpdateWithoutTableColumnsInput>
    create: XOR<GenTableCreateWithoutTableColumnsInput, GenTableUncheckedCreateWithoutTableColumnsInput>
    where?: GenTableWhereInput
  }

  export type GenTableUpdateToOneWithWhereWithoutTableColumnsInput = {
    where?: GenTableWhereInput
    data: XOR<GenTableUpdateWithoutTableColumnsInput, GenTableUncheckedUpdateWithoutTableColumnsInput>
  }

  export type GenTableUpdateWithoutTableColumnsInput = {
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableComment?: NullableStringFieldUpdateOperationsInput | string | null
    subTableName?: NullableStringFieldUpdateOperationsInput | string | null
    subTableFkName?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    tplCategory?: NullableStringFieldUpdateOperationsInput | string | null
    tplWebType?: NullableStringFieldUpdateOperationsInput | string | null
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    moduleName?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    functionName?: NullableStringFieldUpdateOperationsInput | string | null
    functionAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    genType?: NullableStringFieldUpdateOperationsInput | string | null
    genPath?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableUncheckedUpdateWithoutTableColumnsInput = {
    tableId?: IntFieldUpdateOperationsInput | number
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    tableComment?: NullableStringFieldUpdateOperationsInput | string | null
    subTableName?: NullableStringFieldUpdateOperationsInput | string | null
    subTableFkName?: NullableStringFieldUpdateOperationsInput | string | null
    className?: NullableStringFieldUpdateOperationsInput | string | null
    tplCategory?: NullableStringFieldUpdateOperationsInput | string | null
    tplWebType?: NullableStringFieldUpdateOperationsInput | string | null
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    moduleName?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    functionName?: NullableStringFieldUpdateOperationsInput | string | null
    functionAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    genType?: NullableStringFieldUpdateOperationsInput | string | null
    genPath?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysUserCreateWithoutDeptInput = {
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    roles?: SysUserRoleCreateNestedManyWithoutUserInput
    posts?: SysUserPostCreateNestedManyWithoutUserInput
  }

  export type SysUserUncheckedCreateWithoutDeptInput = {
    userId?: number
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    roles?: SysUserRoleUncheckedCreateNestedManyWithoutUserInput
    posts?: SysUserPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type SysUserCreateOrConnectWithoutDeptInput = {
    where: SysUserWhereUniqueInput
    create: XOR<SysUserCreateWithoutDeptInput, SysUserUncheckedCreateWithoutDeptInput>
  }

  export type SysUserCreateManyDeptInputEnvelope = {
    data: SysUserCreateManyDeptInput | SysUserCreateManyDeptInput[]
    skipDuplicates?: boolean
  }

  export type SysRoleDeptCreateWithoutDeptInput = {
    role: SysRoleCreateNestedOneWithoutDeptsInput
  }

  export type SysRoleDeptUncheckedCreateWithoutDeptInput = {
    roleId: number
  }

  export type SysRoleDeptCreateOrConnectWithoutDeptInput = {
    where: SysRoleDeptWhereUniqueInput
    create: XOR<SysRoleDeptCreateWithoutDeptInput, SysRoleDeptUncheckedCreateWithoutDeptInput>
  }

  export type SysRoleDeptCreateManyDeptInputEnvelope = {
    data: SysRoleDeptCreateManyDeptInput | SysRoleDeptCreateManyDeptInput[]
    skipDuplicates?: boolean
  }

  export type SysUserUpsertWithWhereUniqueWithoutDeptInput = {
    where: SysUserWhereUniqueInput
    update: XOR<SysUserUpdateWithoutDeptInput, SysUserUncheckedUpdateWithoutDeptInput>
    create: XOR<SysUserCreateWithoutDeptInput, SysUserUncheckedCreateWithoutDeptInput>
  }

  export type SysUserUpdateWithWhereUniqueWithoutDeptInput = {
    where: SysUserWhereUniqueInput
    data: XOR<SysUserUpdateWithoutDeptInput, SysUserUncheckedUpdateWithoutDeptInput>
  }

  export type SysUserUpdateManyWithWhereWithoutDeptInput = {
    where: SysUserScalarWhereInput
    data: XOR<SysUserUpdateManyMutationInput, SysUserUncheckedUpdateManyWithoutDeptInput>
  }

  export type SysUserScalarWhereInput = {
    AND?: SysUserScalarWhereInput | SysUserScalarWhereInput[]
    OR?: SysUserScalarWhereInput[]
    NOT?: SysUserScalarWhereInput | SysUserScalarWhereInput[]
    userId?: IntFilter<"SysUser"> | number
    deptId?: IntNullableFilter<"SysUser"> | number | null
    userName?: StringFilter<"SysUser"> | string
    nickName?: StringFilter<"SysUser"> | string
    userType?: StringNullableFilter<"SysUser"> | string | null
    email?: StringNullableFilter<"SysUser"> | string | null
    phonenumber?: StringNullableFilter<"SysUser"> | string | null
    sex?: StringNullableFilter<"SysUser"> | string | null
    avatar?: StringNullableFilter<"SysUser"> | string | null
    password?: StringNullableFilter<"SysUser"> | string | null
    status?: StringNullableFilter<"SysUser"> | string | null
    loginIp?: StringNullableFilter<"SysUser"> | string | null
    loginDate?: StringNullableFilter<"SysUser"> | string | null
    createBy?: StringNullableFilter<"SysUser"> | string | null
    createTime?: StringNullableFilter<"SysUser"> | string | null
    updateBy?: StringNullableFilter<"SysUser"> | string | null
    updateTime?: StringNullableFilter<"SysUser"> | string | null
    remark?: StringNullableFilter<"SysUser"> | string | null
  }

  export type SysRoleDeptUpsertWithWhereUniqueWithoutDeptInput = {
    where: SysRoleDeptWhereUniqueInput
    update: XOR<SysRoleDeptUpdateWithoutDeptInput, SysRoleDeptUncheckedUpdateWithoutDeptInput>
    create: XOR<SysRoleDeptCreateWithoutDeptInput, SysRoleDeptUncheckedCreateWithoutDeptInput>
  }

  export type SysRoleDeptUpdateWithWhereUniqueWithoutDeptInput = {
    where: SysRoleDeptWhereUniqueInput
    data: XOR<SysRoleDeptUpdateWithoutDeptInput, SysRoleDeptUncheckedUpdateWithoutDeptInput>
  }

  export type SysRoleDeptUpdateManyWithWhereWithoutDeptInput = {
    where: SysRoleDeptScalarWhereInput
    data: XOR<SysRoleDeptUpdateManyMutationInput, SysRoleDeptUncheckedUpdateManyWithoutDeptInput>
  }

  export type SysRoleDeptScalarWhereInput = {
    AND?: SysRoleDeptScalarWhereInput | SysRoleDeptScalarWhereInput[]
    OR?: SysRoleDeptScalarWhereInput[]
    NOT?: SysRoleDeptScalarWhereInput | SysRoleDeptScalarWhereInput[]
    roleId?: IntFilter<"SysRoleDept"> | number
    deptId?: IntFilter<"SysRoleDept"> | number
  }

  export type SysDictTypeCreateWithoutDictDatasInput = {
    dictName?: string | null
    dictType?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictTypeUncheckedCreateWithoutDictDatasInput = {
    dictId?: number
    dictName?: string | null
    dictType?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictTypeCreateOrConnectWithoutDictDatasInput = {
    where: SysDictTypeWhereUniqueInput
    create: XOR<SysDictTypeCreateWithoutDictDatasInput, SysDictTypeUncheckedCreateWithoutDictDatasInput>
  }

  export type SysDictTypeUpsertWithoutDictDatasInput = {
    update: XOR<SysDictTypeUpdateWithoutDictDatasInput, SysDictTypeUncheckedUpdateWithoutDictDatasInput>
    create: XOR<SysDictTypeCreateWithoutDictDatasInput, SysDictTypeUncheckedCreateWithoutDictDatasInput>
    where?: SysDictTypeWhereInput
  }

  export type SysDictTypeUpdateToOneWithWhereWithoutDictDatasInput = {
    where?: SysDictTypeWhereInput
    data: XOR<SysDictTypeUpdateWithoutDictDatasInput, SysDictTypeUncheckedUpdateWithoutDictDatasInput>
  }

  export type SysDictTypeUpdateWithoutDictDatasInput = {
    dictName?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictTypeUncheckedUpdateWithoutDictDatasInput = {
    dictId?: IntFieldUpdateOperationsInput | number
    dictName?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictDataCreateWithoutSysDictTypeInput = {
    dictSort?: number | null
    dictLabel?: string | null
    dictValue?: string | null
    cssClass?: string | null
    listClass?: string | null
    isDefault?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictDataUncheckedCreateWithoutSysDictTypeInput = {
    dictCode?: number
    dictSort?: number | null
    dictLabel?: string | null
    dictValue?: string | null
    cssClass?: string | null
    listClass?: string | null
    isDefault?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictDataCreateOrConnectWithoutSysDictTypeInput = {
    where: SysDictDataWhereUniqueInput
    create: XOR<SysDictDataCreateWithoutSysDictTypeInput, SysDictDataUncheckedCreateWithoutSysDictTypeInput>
  }

  export type SysDictDataCreateManySysDictTypeInputEnvelope = {
    data: SysDictDataCreateManySysDictTypeInput | SysDictDataCreateManySysDictTypeInput[]
    skipDuplicates?: boolean
  }

  export type SysDictDataUpsertWithWhereUniqueWithoutSysDictTypeInput = {
    where: SysDictDataWhereUniqueInput
    update: XOR<SysDictDataUpdateWithoutSysDictTypeInput, SysDictDataUncheckedUpdateWithoutSysDictTypeInput>
    create: XOR<SysDictDataCreateWithoutSysDictTypeInput, SysDictDataUncheckedCreateWithoutSysDictTypeInput>
  }

  export type SysDictDataUpdateWithWhereUniqueWithoutSysDictTypeInput = {
    where: SysDictDataWhereUniqueInput
    data: XOR<SysDictDataUpdateWithoutSysDictTypeInput, SysDictDataUncheckedUpdateWithoutSysDictTypeInput>
  }

  export type SysDictDataUpdateManyWithWhereWithoutSysDictTypeInput = {
    where: SysDictDataScalarWhereInput
    data: XOR<SysDictDataUpdateManyMutationInput, SysDictDataUncheckedUpdateManyWithoutSysDictTypeInput>
  }

  export type SysDictDataScalarWhereInput = {
    AND?: SysDictDataScalarWhereInput | SysDictDataScalarWhereInput[]
    OR?: SysDictDataScalarWhereInput[]
    NOT?: SysDictDataScalarWhereInput | SysDictDataScalarWhereInput[]
    dictCode?: IntFilter<"SysDictData"> | number
    dictSort?: IntNullableFilter<"SysDictData"> | number | null
    dictLabel?: StringNullableFilter<"SysDictData"> | string | null
    dictValue?: StringNullableFilter<"SysDictData"> | string | null
    dictType?: StringNullableFilter<"SysDictData"> | string | null
    cssClass?: StringNullableFilter<"SysDictData"> | string | null
    listClass?: StringNullableFilter<"SysDictData"> | string | null
    isDefault?: StringNullableFilter<"SysDictData"> | string | null
    status?: StringNullableFilter<"SysDictData"> | string | null
    createBy?: StringNullableFilter<"SysDictData"> | string | null
    createTime?: StringNullableFilter<"SysDictData"> | string | null
    updateBy?: StringNullableFilter<"SysDictData"> | string | null
    updateTime?: StringNullableFilter<"SysDictData"> | string | null
    remark?: StringNullableFilter<"SysDictData"> | string | null
  }

  export type SysRoleMenuCreateWithoutMenuInput = {
    role: SysRoleCreateNestedOneWithoutMenusInput
  }

  export type SysRoleMenuUncheckedCreateWithoutMenuInput = {
    roleId: number
  }

  export type SysRoleMenuCreateOrConnectWithoutMenuInput = {
    where: SysRoleMenuWhereUniqueInput
    create: XOR<SysRoleMenuCreateWithoutMenuInput, SysRoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type SysRoleMenuCreateManyMenuInputEnvelope = {
    data: SysRoleMenuCreateManyMenuInput | SysRoleMenuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type SysRoleMenuUpsertWithWhereUniqueWithoutMenuInput = {
    where: SysRoleMenuWhereUniqueInput
    update: XOR<SysRoleMenuUpdateWithoutMenuInput, SysRoleMenuUncheckedUpdateWithoutMenuInput>
    create: XOR<SysRoleMenuCreateWithoutMenuInput, SysRoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type SysRoleMenuUpdateWithWhereUniqueWithoutMenuInput = {
    where: SysRoleMenuWhereUniqueInput
    data: XOR<SysRoleMenuUpdateWithoutMenuInput, SysRoleMenuUncheckedUpdateWithoutMenuInput>
  }

  export type SysRoleMenuUpdateManyWithWhereWithoutMenuInput = {
    where: SysRoleMenuScalarWhereInput
    data: XOR<SysRoleMenuUpdateManyMutationInput, SysRoleMenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type SysRoleMenuScalarWhereInput = {
    AND?: SysRoleMenuScalarWhereInput | SysRoleMenuScalarWhereInput[]
    OR?: SysRoleMenuScalarWhereInput[]
    NOT?: SysRoleMenuScalarWhereInput | SysRoleMenuScalarWhereInput[]
    roleId?: IntFilter<"SysRoleMenu"> | number
    menuId?: IntFilter<"SysRoleMenu"> | number
  }

  export type SysUserPostCreateWithoutPostInput = {
    user: SysUserCreateNestedOneWithoutPostsInput
  }

  export type SysUserPostUncheckedCreateWithoutPostInput = {
    userId: number
  }

  export type SysUserPostCreateOrConnectWithoutPostInput = {
    where: SysUserPostWhereUniqueInput
    create: XOR<SysUserPostCreateWithoutPostInput, SysUserPostUncheckedCreateWithoutPostInput>
  }

  export type SysUserPostCreateManyPostInputEnvelope = {
    data: SysUserPostCreateManyPostInput | SysUserPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SysUserPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SysUserPostWhereUniqueInput
    update: XOR<SysUserPostUpdateWithoutPostInput, SysUserPostUncheckedUpdateWithoutPostInput>
    create: XOR<SysUserPostCreateWithoutPostInput, SysUserPostUncheckedCreateWithoutPostInput>
  }

  export type SysUserPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SysUserPostWhereUniqueInput
    data: XOR<SysUserPostUpdateWithoutPostInput, SysUserPostUncheckedUpdateWithoutPostInput>
  }

  export type SysUserPostUpdateManyWithWhereWithoutPostInput = {
    where: SysUserPostScalarWhereInput
    data: XOR<SysUserPostUpdateManyMutationInput, SysUserPostUncheckedUpdateManyWithoutPostInput>
  }

  export type SysUserPostScalarWhereInput = {
    AND?: SysUserPostScalarWhereInput | SysUserPostScalarWhereInput[]
    OR?: SysUserPostScalarWhereInput[]
    NOT?: SysUserPostScalarWhereInput | SysUserPostScalarWhereInput[]
    userId?: IntFilter<"SysUserPost"> | number
    postId?: IntFilter<"SysUserPost"> | number
  }

  export type SysUserCreateWithoutPostsInput = {
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    dept?: SysDeptCreateNestedOneWithoutUsersInput
    roles?: SysUserRoleCreateNestedManyWithoutUserInput
  }

  export type SysUserUncheckedCreateWithoutPostsInput = {
    userId?: number
    deptId?: number | null
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    roles?: SysUserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type SysUserCreateOrConnectWithoutPostsInput = {
    where: SysUserWhereUniqueInput
    create: XOR<SysUserCreateWithoutPostsInput, SysUserUncheckedCreateWithoutPostsInput>
  }

  export type SysPostCreateWithoutUsersInput = {
    postCode: string
    postName: string
    postSort: number
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysPostUncheckedCreateWithoutUsersInput = {
    postId?: number
    postCode: string
    postName: string
    postSort: number
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysPostCreateOrConnectWithoutUsersInput = {
    where: SysPostWhereUniqueInput
    create: XOR<SysPostCreateWithoutUsersInput, SysPostUncheckedCreateWithoutUsersInput>
  }

  export type SysUserUpsertWithoutPostsInput = {
    update: XOR<SysUserUpdateWithoutPostsInput, SysUserUncheckedUpdateWithoutPostsInput>
    create: XOR<SysUserCreateWithoutPostsInput, SysUserUncheckedCreateWithoutPostsInput>
    where?: SysUserWhereInput
  }

  export type SysUserUpdateToOneWithWhereWithoutPostsInput = {
    where?: SysUserWhereInput
    data: XOR<SysUserUpdateWithoutPostsInput, SysUserUncheckedUpdateWithoutPostsInput>
  }

  export type SysUserUpdateWithoutPostsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: SysDeptUpdateOneWithoutUsersNestedInput
    roles?: SysUserRoleUpdateManyWithoutUserNestedInput
  }

  export type SysUserUncheckedUpdateWithoutPostsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    deptId?: NullableIntFieldUpdateOperationsInput | number | null
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysUserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SysPostUpsertWithoutUsersInput = {
    update: XOR<SysPostUpdateWithoutUsersInput, SysPostUncheckedUpdateWithoutUsersInput>
    create: XOR<SysPostCreateWithoutUsersInput, SysPostUncheckedCreateWithoutUsersInput>
    where?: SysPostWhereInput
  }

  export type SysPostUpdateToOneWithWhereWithoutUsersInput = {
    where?: SysPostWhereInput
    data: XOR<SysPostUpdateWithoutUsersInput, SysPostUncheckedUpdateWithoutUsersInput>
  }

  export type SysPostUpdateWithoutUsersInput = {
    postCode?: StringFieldUpdateOperationsInput | string
    postName?: StringFieldUpdateOperationsInput | string
    postSort?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysPostUncheckedUpdateWithoutUsersInput = {
    postId?: IntFieldUpdateOperationsInput | number
    postCode?: StringFieldUpdateOperationsInput | string
    postName?: StringFieldUpdateOperationsInput | string
    postSort?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysRoleCreateWithoutDeptsInput = {
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserRoleCreateNestedManyWithoutRoleInput
    menus?: SysRoleMenuCreateNestedManyWithoutRoleInput
  }

  export type SysRoleUncheckedCreateWithoutDeptsInput = {
    roleId?: number
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserRoleUncheckedCreateNestedManyWithoutRoleInput
    menus?: SysRoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SysRoleCreateOrConnectWithoutDeptsInput = {
    where: SysRoleWhereUniqueInput
    create: XOR<SysRoleCreateWithoutDeptsInput, SysRoleUncheckedCreateWithoutDeptsInput>
  }

  export type SysDeptCreateWithoutRolesInput = {
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    users?: SysUserCreateNestedManyWithoutDeptInput
  }

  export type SysDeptUncheckedCreateWithoutRolesInput = {
    deptId?: number
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    users?: SysUserUncheckedCreateNestedManyWithoutDeptInput
  }

  export type SysDeptCreateOrConnectWithoutRolesInput = {
    where: SysDeptWhereUniqueInput
    create: XOR<SysDeptCreateWithoutRolesInput, SysDeptUncheckedCreateWithoutRolesInput>
  }

  export type SysRoleUpsertWithoutDeptsInput = {
    update: XOR<SysRoleUpdateWithoutDeptsInput, SysRoleUncheckedUpdateWithoutDeptsInput>
    create: XOR<SysRoleCreateWithoutDeptsInput, SysRoleUncheckedCreateWithoutDeptsInput>
    where?: SysRoleWhereInput
  }

  export type SysRoleUpdateToOneWithWhereWithoutDeptsInput = {
    where?: SysRoleWhereInput
    data: XOR<SysRoleUpdateWithoutDeptsInput, SysRoleUncheckedUpdateWithoutDeptsInput>
  }

  export type SysRoleUpdateWithoutDeptsInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserRoleUpdateManyWithoutRoleNestedInput
    menus?: SysRoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type SysRoleUncheckedUpdateWithoutDeptsInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    menus?: SysRoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SysDeptUpsertWithoutRolesInput = {
    update: XOR<SysDeptUpdateWithoutRolesInput, SysDeptUncheckedUpdateWithoutRolesInput>
    create: XOR<SysDeptCreateWithoutRolesInput, SysDeptUncheckedCreateWithoutRolesInput>
    where?: SysDeptWhereInput
  }

  export type SysDeptUpdateToOneWithWhereWithoutRolesInput = {
    where?: SysDeptWhereInput
    data: XOR<SysDeptUpdateWithoutRolesInput, SysDeptUncheckedUpdateWithoutRolesInput>
  }

  export type SysDeptUpdateWithoutRolesInput = {
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserUpdateManyWithoutDeptNestedInput
  }

  export type SysDeptUncheckedUpdateWithoutRolesInput = {
    deptId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserUncheckedUpdateManyWithoutDeptNestedInput
  }

  export type SysMenuCreateWithoutRolesInput = {
    menuName: string
    parentId?: number | null
    orderNum?: number | null
    path?: string | null
    component?: string | null
    query?: string | null
    isFrame?: number | null
    isCache?: number | null
    menuType?: string | null
    visible?: string | null
    status?: string | null
    perms?: string | null
    icon?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysMenuUncheckedCreateWithoutRolesInput = {
    menuId?: number
    menuName: string
    parentId?: number | null
    orderNum?: number | null
    path?: string | null
    component?: string | null
    query?: string | null
    isFrame?: number | null
    isCache?: number | null
    menuType?: string | null
    visible?: string | null
    status?: string | null
    perms?: string | null
    icon?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysMenuCreateOrConnectWithoutRolesInput = {
    where: SysMenuWhereUniqueInput
    create: XOR<SysMenuCreateWithoutRolesInput, SysMenuUncheckedCreateWithoutRolesInput>
  }

  export type SysRoleCreateWithoutMenusInput = {
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserRoleCreateNestedManyWithoutRoleInput
    depts?: SysRoleDeptCreateNestedManyWithoutRoleInput
  }

  export type SysRoleUncheckedCreateWithoutMenusInput = {
    roleId?: number
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    users?: SysUserRoleUncheckedCreateNestedManyWithoutRoleInput
    depts?: SysRoleDeptUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SysRoleCreateOrConnectWithoutMenusInput = {
    where: SysRoleWhereUniqueInput
    create: XOR<SysRoleCreateWithoutMenusInput, SysRoleUncheckedCreateWithoutMenusInput>
  }

  export type SysMenuUpsertWithoutRolesInput = {
    update: XOR<SysMenuUpdateWithoutRolesInput, SysMenuUncheckedUpdateWithoutRolesInput>
    create: XOR<SysMenuCreateWithoutRolesInput, SysMenuUncheckedCreateWithoutRolesInput>
    where?: SysMenuWhereInput
  }

  export type SysMenuUpdateToOneWithWhereWithoutRolesInput = {
    where?: SysMenuWhereInput
    data: XOR<SysMenuUpdateWithoutRolesInput, SysMenuUncheckedUpdateWithoutRolesInput>
  }

  export type SysMenuUpdateWithoutRolesInput = {
    menuName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: NullableIntFieldUpdateOperationsInput | number | null
    menuType?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysMenuUncheckedUpdateWithoutRolesInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    menuName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: NullableIntFieldUpdateOperationsInput | number | null
    menuType?: NullableStringFieldUpdateOperationsInput | string | null
    visible?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysRoleUpsertWithoutMenusInput = {
    update: XOR<SysRoleUpdateWithoutMenusInput, SysRoleUncheckedUpdateWithoutMenusInput>
    create: XOR<SysRoleCreateWithoutMenusInput, SysRoleUncheckedCreateWithoutMenusInput>
    where?: SysRoleWhereInput
  }

  export type SysRoleUpdateToOneWithWhereWithoutMenusInput = {
    where?: SysRoleWhereInput
    data: XOR<SysRoleUpdateWithoutMenusInput, SysRoleUncheckedUpdateWithoutMenusInput>
  }

  export type SysRoleUpdateWithoutMenusInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserRoleUpdateManyWithoutRoleNestedInput
    depts?: SysRoleDeptUpdateManyWithoutRoleNestedInput
  }

  export type SysRoleUncheckedUpdateWithoutMenusInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    users?: SysUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    depts?: SysRoleDeptUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SysDeptCreateWithoutUsersInput = {
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    roles?: SysRoleDeptCreateNestedManyWithoutDeptInput
  }

  export type SysDeptUncheckedCreateWithoutUsersInput = {
    deptId?: number
    parentId?: number | null
    ancestors?: string | null
    deptName?: string | null
    orderNum?: number | null
    leader?: string | null
    phone?: string | null
    email?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    roles?: SysRoleDeptUncheckedCreateNestedManyWithoutDeptInput
  }

  export type SysDeptCreateOrConnectWithoutUsersInput = {
    where: SysDeptWhereUniqueInput
    create: XOR<SysDeptCreateWithoutUsersInput, SysDeptUncheckedCreateWithoutUsersInput>
  }

  export type SysUserRoleCreateWithoutUserInput = {
    role: SysRoleCreateNestedOneWithoutUsersInput
  }

  export type SysUserRoleUncheckedCreateWithoutUserInput = {
    roleId: number
  }

  export type SysUserRoleCreateOrConnectWithoutUserInput = {
    where: SysUserRoleWhereUniqueInput
    create: XOR<SysUserRoleCreateWithoutUserInput, SysUserRoleUncheckedCreateWithoutUserInput>
  }

  export type SysUserRoleCreateManyUserInputEnvelope = {
    data: SysUserRoleCreateManyUserInput | SysUserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SysUserPostCreateWithoutUserInput = {
    post: SysPostCreateNestedOneWithoutUsersInput
  }

  export type SysUserPostUncheckedCreateWithoutUserInput = {
    postId: number
  }

  export type SysUserPostCreateOrConnectWithoutUserInput = {
    where: SysUserPostWhereUniqueInput
    create: XOR<SysUserPostCreateWithoutUserInput, SysUserPostUncheckedCreateWithoutUserInput>
  }

  export type SysUserPostCreateManyUserInputEnvelope = {
    data: SysUserPostCreateManyUserInput | SysUserPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SysDeptUpsertWithoutUsersInput = {
    update: XOR<SysDeptUpdateWithoutUsersInput, SysDeptUncheckedUpdateWithoutUsersInput>
    create: XOR<SysDeptCreateWithoutUsersInput, SysDeptUncheckedCreateWithoutUsersInput>
    where?: SysDeptWhereInput
  }

  export type SysDeptUpdateToOneWithWhereWithoutUsersInput = {
    where?: SysDeptWhereInput
    data: XOR<SysDeptUpdateWithoutUsersInput, SysDeptUncheckedUpdateWithoutUsersInput>
  }

  export type SysDeptUpdateWithoutUsersInput = {
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysRoleDeptUpdateManyWithoutDeptNestedInput
  }

  export type SysDeptUncheckedUpdateWithoutUsersInput = {
    deptId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    ancestors?: NullableStringFieldUpdateOperationsInput | string | null
    deptName?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: NullableIntFieldUpdateOperationsInput | number | null
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysRoleDeptUncheckedUpdateManyWithoutDeptNestedInput
  }

  export type SysUserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: SysUserRoleWhereUniqueInput
    update: XOR<SysUserRoleUpdateWithoutUserInput, SysUserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<SysUserRoleCreateWithoutUserInput, SysUserRoleUncheckedCreateWithoutUserInput>
  }

  export type SysUserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: SysUserRoleWhereUniqueInput
    data: XOR<SysUserRoleUpdateWithoutUserInput, SysUserRoleUncheckedUpdateWithoutUserInput>
  }

  export type SysUserRoleUpdateManyWithWhereWithoutUserInput = {
    where: SysUserRoleScalarWhereInput
    data: XOR<SysUserRoleUpdateManyMutationInput, SysUserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type SysUserRoleScalarWhereInput = {
    AND?: SysUserRoleScalarWhereInput | SysUserRoleScalarWhereInput[]
    OR?: SysUserRoleScalarWhereInput[]
    NOT?: SysUserRoleScalarWhereInput | SysUserRoleScalarWhereInput[]
    userId?: IntFilter<"SysUserRole"> | number
    roleId?: IntFilter<"SysUserRole"> | number
  }

  export type SysUserPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SysUserPostWhereUniqueInput
    update: XOR<SysUserPostUpdateWithoutUserInput, SysUserPostUncheckedUpdateWithoutUserInput>
    create: XOR<SysUserPostCreateWithoutUserInput, SysUserPostUncheckedCreateWithoutUserInput>
  }

  export type SysUserPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SysUserPostWhereUniqueInput
    data: XOR<SysUserPostUpdateWithoutUserInput, SysUserPostUncheckedUpdateWithoutUserInput>
  }

  export type SysUserPostUpdateManyWithWhereWithoutUserInput = {
    where: SysUserPostScalarWhereInput
    data: XOR<SysUserPostUpdateManyMutationInput, SysUserPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SysUserRoleCreateWithoutRoleInput = {
    user: SysUserCreateNestedOneWithoutRolesInput
  }

  export type SysUserRoleUncheckedCreateWithoutRoleInput = {
    userId: number
  }

  export type SysUserRoleCreateOrConnectWithoutRoleInput = {
    where: SysUserRoleWhereUniqueInput
    create: XOR<SysUserRoleCreateWithoutRoleInput, SysUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type SysUserRoleCreateManyRoleInputEnvelope = {
    data: SysUserRoleCreateManyRoleInput | SysUserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SysRoleMenuCreateWithoutRoleInput = {
    menu: SysMenuCreateNestedOneWithoutRolesInput
  }

  export type SysRoleMenuUncheckedCreateWithoutRoleInput = {
    menuId: number
  }

  export type SysRoleMenuCreateOrConnectWithoutRoleInput = {
    where: SysRoleMenuWhereUniqueInput
    create: XOR<SysRoleMenuCreateWithoutRoleInput, SysRoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type SysRoleMenuCreateManyRoleInputEnvelope = {
    data: SysRoleMenuCreateManyRoleInput | SysRoleMenuCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SysRoleDeptCreateWithoutRoleInput = {
    dept: SysDeptCreateNestedOneWithoutRolesInput
  }

  export type SysRoleDeptUncheckedCreateWithoutRoleInput = {
    deptId: number
  }

  export type SysRoleDeptCreateOrConnectWithoutRoleInput = {
    where: SysRoleDeptWhereUniqueInput
    create: XOR<SysRoleDeptCreateWithoutRoleInput, SysRoleDeptUncheckedCreateWithoutRoleInput>
  }

  export type SysRoleDeptCreateManyRoleInputEnvelope = {
    data: SysRoleDeptCreateManyRoleInput | SysRoleDeptCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SysUserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: SysUserRoleWhereUniqueInput
    update: XOR<SysUserRoleUpdateWithoutRoleInput, SysUserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<SysUserRoleCreateWithoutRoleInput, SysUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type SysUserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: SysUserRoleWhereUniqueInput
    data: XOR<SysUserRoleUpdateWithoutRoleInput, SysUserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type SysUserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: SysUserRoleScalarWhereInput
    data: XOR<SysUserRoleUpdateManyMutationInput, SysUserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type SysRoleMenuUpsertWithWhereUniqueWithoutRoleInput = {
    where: SysRoleMenuWhereUniqueInput
    update: XOR<SysRoleMenuUpdateWithoutRoleInput, SysRoleMenuUncheckedUpdateWithoutRoleInput>
    create: XOR<SysRoleMenuCreateWithoutRoleInput, SysRoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type SysRoleMenuUpdateWithWhereUniqueWithoutRoleInput = {
    where: SysRoleMenuWhereUniqueInput
    data: XOR<SysRoleMenuUpdateWithoutRoleInput, SysRoleMenuUncheckedUpdateWithoutRoleInput>
  }

  export type SysRoleMenuUpdateManyWithWhereWithoutRoleInput = {
    where: SysRoleMenuScalarWhereInput
    data: XOR<SysRoleMenuUpdateManyMutationInput, SysRoleMenuUncheckedUpdateManyWithoutRoleInput>
  }

  export type SysRoleDeptUpsertWithWhereUniqueWithoutRoleInput = {
    where: SysRoleDeptWhereUniqueInput
    update: XOR<SysRoleDeptUpdateWithoutRoleInput, SysRoleDeptUncheckedUpdateWithoutRoleInput>
    create: XOR<SysRoleDeptCreateWithoutRoleInput, SysRoleDeptUncheckedCreateWithoutRoleInput>
  }

  export type SysRoleDeptUpdateWithWhereUniqueWithoutRoleInput = {
    where: SysRoleDeptWhereUniqueInput
    data: XOR<SysRoleDeptUpdateWithoutRoleInput, SysRoleDeptUncheckedUpdateWithoutRoleInput>
  }

  export type SysRoleDeptUpdateManyWithWhereWithoutRoleInput = {
    where: SysRoleDeptScalarWhereInput
    data: XOR<SysRoleDeptUpdateManyMutationInput, SysRoleDeptUncheckedUpdateManyWithoutRoleInput>
  }

  export type SysUserCreateWithoutRolesInput = {
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    dept?: SysDeptCreateNestedOneWithoutUsersInput
    posts?: SysUserPostCreateNestedManyWithoutUserInput
  }

  export type SysUserUncheckedCreateWithoutRolesInput = {
    userId?: number
    deptId?: number | null
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    posts?: SysUserPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type SysUserCreateOrConnectWithoutRolesInput = {
    where: SysUserWhereUniqueInput
    create: XOR<SysUserCreateWithoutRolesInput, SysUserUncheckedCreateWithoutRolesInput>
  }

  export type SysRoleCreateWithoutUsersInput = {
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    menus?: SysRoleMenuCreateNestedManyWithoutRoleInput
    depts?: SysRoleDeptCreateNestedManyWithoutRoleInput
  }

  export type SysRoleUncheckedCreateWithoutUsersInput = {
    roleId?: number
    roleName: string
    roleKey: string
    roleSort: number
    dataScope?: string | null
    menuCheckStrictly?: number | null
    deptCheckStrictly?: number | null
    status?: string
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
    menus?: SysRoleMenuUncheckedCreateNestedManyWithoutRoleInput
    depts?: SysRoleDeptUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SysRoleCreateOrConnectWithoutUsersInput = {
    where: SysRoleWhereUniqueInput
    create: XOR<SysRoleCreateWithoutUsersInput, SysRoleUncheckedCreateWithoutUsersInput>
  }

  export type SysUserUpsertWithoutRolesInput = {
    update: XOR<SysUserUpdateWithoutRolesInput, SysUserUncheckedUpdateWithoutRolesInput>
    create: XOR<SysUserCreateWithoutRolesInput, SysUserUncheckedCreateWithoutRolesInput>
    where?: SysUserWhereInput
  }

  export type SysUserUpdateToOneWithWhereWithoutRolesInput = {
    where?: SysUserWhereInput
    data: XOR<SysUserUpdateWithoutRolesInput, SysUserUncheckedUpdateWithoutRolesInput>
  }

  export type SysUserUpdateWithoutRolesInput = {
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: SysDeptUpdateOneWithoutUsersNestedInput
    posts?: SysUserPostUpdateManyWithoutUserNestedInput
  }

  export type SysUserUncheckedUpdateWithoutRolesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    deptId?: NullableIntFieldUpdateOperationsInput | number | null
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: SysUserPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SysRoleUpsertWithoutUsersInput = {
    update: XOR<SysRoleUpdateWithoutUsersInput, SysRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<SysRoleCreateWithoutUsersInput, SysRoleUncheckedCreateWithoutUsersInput>
    where?: SysRoleWhereInput
  }

  export type SysRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: SysRoleWhereInput
    data: XOR<SysRoleUpdateWithoutUsersInput, SysRoleUncheckedUpdateWithoutUsersInput>
  }

  export type SysRoleUpdateWithoutUsersInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: SysRoleMenuUpdateManyWithoutRoleNestedInput
    depts?: SysRoleDeptUpdateManyWithoutRoleNestedInput
  }

  export type SysRoleUncheckedUpdateWithoutUsersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    roleKey?: StringFieldUpdateOperationsInput | string
    roleSort?: IntFieldUpdateOperationsInput | number
    dataScope?: NullableStringFieldUpdateOperationsInput | string | null
    menuCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    deptCheckStrictly?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: SysRoleMenuUncheckedUpdateManyWithoutRoleNestedInput
    depts?: SysRoleDeptUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type GenTableColumnCreateManyTableInput = {
    columnId?: number
    columnName?: string | null
    columnComment?: string | null
    columnType?: string | null
    javaType?: string | null
    javaField?: string | null
    isPk?: string | null
    isIncrement?: string | null
    isRequired?: string | null
    isInsert?: string | null
    isEdit?: string | null
    isList?: string | null
    isQuery?: string | null
    queryType?: string | null
    htmlType?: string | null
    dictType?: string | null
    sort?: number | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
  }

  export type GenTableColumnUpdateWithoutTableInput = {
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableColumnUncheckedUpdateWithoutTableInput = {
    columnId?: IntFieldUpdateOperationsInput | number
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenTableColumnUncheckedUpdateManyWithoutTableInput = {
    columnId?: IntFieldUpdateOperationsInput | number
    columnName?: NullableStringFieldUpdateOperationsInput | string | null
    columnComment?: NullableStringFieldUpdateOperationsInput | string | null
    columnType?: NullableStringFieldUpdateOperationsInput | string | null
    javaType?: NullableStringFieldUpdateOperationsInput | string | null
    javaField?: NullableStringFieldUpdateOperationsInput | string | null
    isPk?: NullableStringFieldUpdateOperationsInput | string | null
    isIncrement?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: NullableStringFieldUpdateOperationsInput | string | null
    isInsert?: NullableStringFieldUpdateOperationsInput | string | null
    isEdit?: NullableStringFieldUpdateOperationsInput | string | null
    isList?: NullableStringFieldUpdateOperationsInput | string | null
    isQuery?: NullableStringFieldUpdateOperationsInput | string | null
    queryType?: NullableStringFieldUpdateOperationsInput | string | null
    htmlType?: NullableStringFieldUpdateOperationsInput | string | null
    dictType?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysUserCreateManyDeptInput = {
    userId?: number
    userName: string
    nickName: string
    userType?: string | null
    email?: string | null
    phonenumber?: string | null
    sex?: string | null
    avatar?: string | null
    password?: string | null
    status?: string | null
    loginIp?: string | null
    loginDate?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysRoleDeptCreateManyDeptInput = {
    roleId: number
  }

  export type SysUserUpdateWithoutDeptInput = {
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysUserRoleUpdateManyWithoutUserNestedInput
    posts?: SysUserPostUpdateManyWithoutUserNestedInput
  }

  export type SysUserUncheckedUpdateWithoutDeptInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: SysUserRoleUncheckedUpdateManyWithoutUserNestedInput
    posts?: SysUserPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SysUserUncheckedUpdateManyWithoutDeptInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    loginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginDate?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysRoleDeptUpdateWithoutDeptInput = {
    role?: SysRoleUpdateOneRequiredWithoutDeptsNestedInput
  }

  export type SysRoleDeptUncheckedUpdateWithoutDeptInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleDeptUncheckedUpdateManyWithoutDeptInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysDictDataCreateManySysDictTypeInput = {
    dictCode?: number
    dictSort?: number | null
    dictLabel?: string | null
    dictValue?: string | null
    cssClass?: string | null
    listClass?: string | null
    isDefault?: string | null
    status?: string | null
    createBy?: string | null
    createTime?: string | null
    updateBy?: string | null
    updateTime?: string | null
    remark?: string | null
  }

  export type SysDictDataUpdateWithoutSysDictTypeInput = {
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictDataUncheckedUpdateWithoutSysDictTypeInput = {
    dictCode?: IntFieldUpdateOperationsInput | number
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysDictDataUncheckedUpdateManyWithoutSysDictTypeInput = {
    dictCode?: IntFieldUpdateOperationsInput | number
    dictSort?: NullableIntFieldUpdateOperationsInput | number | null
    dictLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dictValue?: NullableStringFieldUpdateOperationsInput | string | null
    cssClass?: NullableStringFieldUpdateOperationsInput | string | null
    listClass?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: NullableStringFieldUpdateOperationsInput | string | null
    updateBy?: NullableStringFieldUpdateOperationsInput | string | null
    updateTime?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SysRoleMenuCreateManyMenuInput = {
    roleId: number
  }

  export type SysRoleMenuUpdateWithoutMenuInput = {
    role?: SysRoleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type SysRoleMenuUncheckedUpdateWithoutMenuInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleMenuUncheckedUpdateManyWithoutMenuInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserPostCreateManyPostInput = {
    userId: number
  }

  export type SysUserPostUpdateWithoutPostInput = {
    user?: SysUserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type SysUserPostUncheckedUpdateWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserPostUncheckedUpdateManyWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserRoleCreateManyUserInput = {
    roleId: number
  }

  export type SysUserPostCreateManyUserInput = {
    postId: number
  }

  export type SysUserRoleUpdateWithoutUserInput = {
    role?: SysRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SysUserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserPostUpdateWithoutUserInput = {
    post?: SysPostUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SysUserPostUncheckedUpdateWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserPostUncheckedUpdateManyWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserRoleCreateManyRoleInput = {
    userId: number
  }

  export type SysRoleMenuCreateManyRoleInput = {
    menuId: number
  }

  export type SysRoleDeptCreateManyRoleInput = {
    deptId: number
  }

  export type SysUserRoleUpdateWithoutRoleInput = {
    user?: SysUserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type SysUserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SysUserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleMenuUpdateWithoutRoleInput = {
    menu?: SysMenuUpdateOneRequiredWithoutRolesNestedInput
  }

  export type SysRoleMenuUncheckedUpdateWithoutRoleInput = {
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleMenuUncheckedUpdateManyWithoutRoleInput = {
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleDeptUpdateWithoutRoleInput = {
    dept?: SysDeptUpdateOneRequiredWithoutRolesNestedInput
  }

  export type SysRoleDeptUncheckedUpdateWithoutRoleInput = {
    deptId?: IntFieldUpdateOperationsInput | number
  }

  export type SysRoleDeptUncheckedUpdateManyWithoutRoleInput = {
    deptId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GenTableCountOutputTypeDefaultArgs instead
     */
    export type GenTableCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenTableCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysDeptCountOutputTypeDefaultArgs instead
     */
    export type SysDeptCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysDeptCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysDictTypeCountOutputTypeDefaultArgs instead
     */
    export type SysDictTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysDictTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysMenuCountOutputTypeDefaultArgs instead
     */
    export type SysMenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysMenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysPostCountOutputTypeDefaultArgs instead
     */
    export type SysPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysUserCountOutputTypeDefaultArgs instead
     */
    export type SysUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysRoleCountOutputTypeDefaultArgs instead
     */
    export type SysRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenTableDefaultArgs instead
     */
    export type GenTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenTableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenTableColumnDefaultArgs instead
     */
    export type GenTableColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenTableColumnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysConfigDefaultArgs instead
     */
    export type SysConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysDeptDefaultArgs instead
     */
    export type SysDeptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysDeptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysDictDataDefaultArgs instead
     */
    export type SysDictDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysDictDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysDictTypeDefaultArgs instead
     */
    export type SysDictTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysDictTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysLogininforDefaultArgs instead
     */
    export type SysLogininforArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysLogininforDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysMenuDefaultArgs instead
     */
    export type SysMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysMenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysNoticeDefaultArgs instead
     */
    export type SysNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysNoticeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysPostDefaultArgs instead
     */
    export type SysPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysUserPostDefaultArgs instead
     */
    export type SysUserPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysUserPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysRoleDeptDefaultArgs instead
     */
    export type SysRoleDeptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysRoleDeptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysRoleMenuDefaultArgs instead
     */
    export type SysRoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysRoleMenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysUserDefaultArgs instead
     */
    export type SysUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysRoleDefaultArgs instead
     */
    export type SysRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SysUserRoleDefaultArgs instead
     */
    export type SysUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SysUserRoleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}