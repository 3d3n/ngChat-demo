export interface Chat {
    message?: string;
    timestamp?: string;
    chatRoom?: string;
    screenName?: string;
}

export const availableChatRooms: string[] = ['Fun with Taxes', 'The Dark Web', 'Everything NG', 'Mystic1-4U'];