const ChatHistoryItem = ({ title, date }: { title: string; date: string }) => (
  <div className="flex flex-col gap-1 mb-4 p-3 border rounded-md hover:bg-blue-50 cursor-pointer">
    <span className="font-semibold text-gray-700">{title}</span>
    <span className="text-sm text-gray-500">{date}</span>
  </div>
);

export default ChatHistoryItem;
