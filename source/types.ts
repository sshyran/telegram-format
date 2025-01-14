export type Formatter = {
	parse_mode: 'HTML' | 'Markdown' | 'MarkdownV2';
	bold: (text: string) => string;
	escape: (text: string) => string;
	italic: (text: string) => string;
	monospace: (text: string) => string;
	monospaceBlock: (text: string, programmingLanguage?: string) => string;
	spoiler: (text: string) => string;
	strikethrough: (text: string) => string;
	underline: (text: string) => string;
	url: (label: string, url: string) => string;
	userMention: (label: string, userId: number) => string;
}
