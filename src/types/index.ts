export interface Block {
  type: 'Image' | 'Headline' | 'Paragraph' | 'Button'
  content: string
}

export interface AppState {
  blocks: Block[]
}
