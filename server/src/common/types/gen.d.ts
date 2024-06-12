interface Table {
  tableName: string | null | undefined
  tableComment: string | null | undefined
  createTime: Date | null | undefined
  updateTime: Date | null | undefined
}

interface ColumnInfo {
  columnName: string | null | undefined
  isRequired: string | null | undefined
  isPk: string | null | undefined
  isIncrement: string | null | undefined
  sort: int | null | undefined
  columnComment: string | null | undefined
  columnType: string | null | undefined
}