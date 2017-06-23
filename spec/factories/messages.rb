FactoryGirl.define do

  factory :message do

    image             { File.open("spec/file/003.png") }
    body              { Faker::Lorem.sentence}
    user_id           { Faker::Number.number(2)}
    group_id          { Faker::Number.number(2)}
  end

end