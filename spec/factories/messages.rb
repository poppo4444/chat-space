FactoryGirl.define do

  factory :message do

    image             { File.open("spec/file/003.png") }
    body              { Faker::Lorem.sentence }
    user_id           { Faker::Number.number(2) }
    group_id          { Faker::Number.number(2) }
    created_at        { Faker::Time.between(5.days.ago, 3.days.ago, :all) }
    updated_at        { Faker::Time.between(2.days.ago, 1.days.ago, :all) }
  end

end
