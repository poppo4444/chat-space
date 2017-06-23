FactoryGirl.define do

  factory :message do
    body              "texttexttext"
    image             { File.open("spec/file/003.png") }
    user_id           "2"
    group_id          "4"
  end

end