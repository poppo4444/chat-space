# chat-space1

## users table

|column|type|options|
|--|--|--|
|id|integer||
|name|string|null:false,unique:true|
|email|string|null:false,unique:true|
|password|string|null:false,unique:true|

# Association

has_many: :messages
has_many: :members

## messages table

|column|type|options|
|--|--|--|
|body|string|null:false,unique:true|
|user_id|integer||
|times_stamp|datetime|null:false,unique:true|

# Association

belongs_to: :users

## groups

|column|type|options|
|--|--|--|
|id|string|null:false,unique:true|
|group_name|string|null:false,unique:true|

# Association

has_many: :users_groups

## members

|column|type|options|
|--|--|--|
|group_id|integer||
|user_id|integer||

# Association

belongs_to: :users,groups