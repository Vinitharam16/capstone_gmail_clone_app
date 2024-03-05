import { AccessTime, Inbox, InsertDriveFileOutlined, Photo, Send, SendOutlined, StarOutline } from "@mui/icons-material";

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Inbox
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline
    },
    {
        name: 'snoozed',
        title: 'Snoozed',
        icon: AccessTime
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: Send
    },
    {
        name: 'draft',
        title: 'Drafts',
        icon: InsertDriveFileOutlined
    }
];