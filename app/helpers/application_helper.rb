module ApplicationHelper

  def group_messages_present?(group)
    if group.messages.last.present? 
      group.messages.last.body
    else
      puts "最新のメッセージはありません"
    end
  end

end
