export interface IDownloadMoviesData {
  exec (): Promise<IDownloadMoviesData.Output>
}

export namespace IDownloadMoviesData {
  export type Output = void
}